// Package declaration - defines the namespace for this controller class
package com.example.skill_sharing_backend.controller;

// Importing required Java utility and stream classes
import java.util.List;
import java.util.stream.Collectors;

// Importing Spring annotations and HTTP-related classes
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

// Importing project-specific DTO and model classes
import com.example.skill_sharing_backend.dto.CommentDTO;
import com.example.skill_sharing_backend.model.Comment;
import com.example.skill_sharing_backend.model.User;
import com.example.skill_sharing_backend.service.CommentService;

// Declares this class as a REST controller that handles HTTP requests
@RestController
// Maps all endpoints in this controller to start with /api/comments
@RequestMapping("/api/comments")
public class CommentController {

    // Injects the CommentService dependency to handle business logic
    @Autowired
    private CommentService commentService;

    // GET endpoint to retrieve all comments for a given post by its ID
    @GetMapping("/post/{postId}")
    public List<CommentDTO> getCommentsByPostId(@PathVariable Long postId) {
        // Fetches the list of Comment objects associated with the post ID
        List<Comment> comments = commentService.getCommentsByPostId(postId);
        // Converts each Comment entity to a CommentDTO and returns the list
        return comments.stream().map(comment -> {
            // Create new DTO object to hold comment data
            CommentDTO dto = new CommentDTO();
            dto.setId(comment.getId()); // Set comment ID
            dto.setContent(comment.getContent()); // Set comment content
            dto.setCreatedAt(comment.getCreatedAt()); // Set timestamp of creation
            
            // Extract and set user-related information safely
            User user = comment.getUser(); // Get the user associated with the comment
            if (user != null) {
                dto.setUserId(user.getId()); // Set user ID
                dto.setUserName(user.getName() != null ? user.getName() : "Anonymous"); // Set user name, or default
                dto.setUserProfileImage(user.getProfileImage()); // Set profile image
            } else {
                dto.setUserName("Anonymous"); // Default name if user is null
                dto.setUserProfileImage(null); // No image if user is null
            }
            
            dto.setPostId(comment.getPost().getId()); // Set the ID of the associated post
            return dto; // Return populated DTO
        }).collect(Collectors.toList()); // Collect all DTOs into a list
    }

    // POST endpoint to add a new comment to a post
    @PostMapping("/post/{postId}")
    public ResponseEntity<CommentDTO> addComment(@PathVariable Long postId, @RequestBody CommentDTO commentDTO, @RequestParam Long userId) {
        // Call service to add a comment and retrieve the saved Comment entity
        Comment comment = commentService.addComment(postId, commentDTO, userId);
        
        // Convert the saved Comment entity to a DTO to return to the client
        CommentDTO responseDTO = new CommentDTO();
        responseDTO.setId(comment.getId()); // Set ID of the new comment
        responseDTO.setContent(comment.getContent()); // Set comment content
        responseDTO.setCreatedAt(comment.getCreatedAt()); // Set timestamp
        responseDTO.setUserId(comment.getUser().getId()); // Set user ID
        responseDTO.setUserName(comment.getUser().getName()); // Set user name
        responseDTO.setUserProfileImage(comment.getUser().getProfileImage()); // Set profile image
        responseDTO.setPostId(comment.getPost().getId()); // Set associated post ID

        // Return the response with status 201 Created
        return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
    }

    // PUT endpoint to update an existing comment by its ID
    @PutMapping("/{id}")
    public ResponseEntity<CommentDTO> updateComment(@PathVariable Long id, @RequestBody CommentDTO commentDTO) {
        // Call service method to update the comment and return updated entity
        Comment updatedComment = commentService.updateComment(id, commentDTO);
        
        // Convert updated Comment entity to DTO
        CommentDTO responseDTO = new CommentDTO();
        responseDTO.setId(updatedComment.getId()); // Set updated comment ID
        responseDTO.setContent(updatedComment.getContent()); // Set updated content
        responseDTO.setCreatedAt(updatedComment.getCreatedAt()); // Set updated timestamp
        responseDTO.setUserId(updatedComment.getUser().getId()); // Set user ID
        responseDTO.setUserName(updatedComment.getUser().getName()); // Set user name
        responseDTO.setUserProfileImage(updatedComment.getUser().getProfileImage()); // Set user profile image
        responseDTO.setPostId(updatedComment.getPost().getId()); // Set associated post ID

        // Return the updated DTO with status 200 OK
        return new ResponseEntity<>(responseDTO, HttpStatus.OK);
    }

    // DELETE endpoint to remove a comment by its ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long id) {
        // Call service to delete the comment
        commentService.deleteComment(id);
        // Return HTTP 204 No Content to indicate successful deletion
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
