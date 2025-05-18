package com.example.skillshare.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
@Builder
public class ProgressUpdate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title; // e.g., "Completed React Basics"

    @Column(columnDefinition = "TEXT")
    private String description;

    private LocalDate date; // Progress date

    private Long userId; // Optional: link to user
}
