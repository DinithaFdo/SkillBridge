package com.example.skill_sharing_backend.controller;

import com.example.skill_sharing_backend.dto.LearningPlanDTO;
import com.example.skill_sharing_backend.model.LearningPlan;
import com.example.skill_sharing_backend.service.LearningPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/plans")
public class LearningPlanController {

    @Autowired
    private LearningPlanService planService;



    // Endpoint to get all learning plans
    @GetMapping
    public List<LearningPlanDTO> getAllPlans() {
        List<LearningPlan> plans = planService.getAllPlans();
        return plans.stream().map(plan -> {
            LearningPlanDTO dto = new LearningPlanDTO();
            dto.setId(plan.getId());
            dto.setTitle(plan.getTitle());
            dto.setTopics(plan.getTopics());
            dto.setResources(plan.getResources());
            dto.setTimeline(plan.getTimeline());
            dto.setUserId(plan.getUser().getId());
            dto.setUserName(plan.getUser().getName());
            return dto;
        }).collect(Collectors.toList());
    }

    // Endpoint to create a new learning plan
    @PostMapping
    public ResponseEntity<LearningPlanDTO> createPlan(@RequestBody LearningPlanDTO planDTO, @RequestParam Long userId) {
        LearningPlan plan = planService.createPlan(planDTO, userId);
        LearningPlanDTO responseDTO = new LearningPlanDTO();
        responseDTO.setId(plan.getId());
        responseDTO.setTitle(plan.getTitle());
        responseDTO.setTopics(plan.getTopics());
        responseDTO.setResources(plan.getResources());
        responseDTO.setTimeline(plan.getTimeline());
        responseDTO.setUserId(plan.getUser().getId());
        responseDTO.setUserName(plan.getUser().getName());
        return new ResponseEntity<>(responseDTO, HttpStatus.CREATED);
    }

    // Endpoint to edit a learning plan with the ID
    @PutMapping("/{id}")
    public ResponseEntity<LearningPlanDTO> updatePlan(@PathVariable Long id, @RequestBody LearningPlanDTO planDTO) {
        LearningPlan updatedPlan = planService.updatePlan(id, planDTO);
        LearningPlanDTO responseDTO = new LearningPlanDTO();
        responseDTO.setId(updatedPlan.getId());
        responseDTO.setTitle(updatedPlan.getTitle());
        responseDTO.setTopics(updatedPlan.getTopics());
        responseDTO.setResources(updatedPlan.getResources());
        responseDTO.setTimeline(updatedPlan.getTimeline());
        responseDTO.setUserId(updatedPlan.getUser().getId());
        responseDTO.setUserName(updatedPlan.getUser().getName());
        return new ResponseEntity<>(responseDTO, HttpStatus.OK);
    }

    // Endpoint to delete a learning plan from ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlan(@PathVariable Long id) {
        planService.deletePlan(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}