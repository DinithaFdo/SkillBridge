package com.example.skillshare.service.impl;

import com.example.skillshare.entity.ProgressUpdate;
import com.example.skillshare.repository.ProgressUpdateRepository;
import com.example.skillshare.service.ProgressUpdateService;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProgressUpdateServiceImpl implements ProgressUpdateService {

    private final ProgressUpdateRepository repository;

    @Override
    public ProgressUpdate create(ProgressUpdate progress) {
        return repository.save(progress);
    }

    @Override
    public List<ProgressUpdate> getAll() {
        return repository.findAll();
    }

    @Override
    public ProgressUpdate getById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Progress not found"));
    }

    @Override
    public ProgressUpdate update(Long id, ProgressUpdate updated) {
        ProgressUpdate existing = getById(id);
        existing.setTitle(updated.getTitle());
        existing.setDescription(updated.getDescription());
        existing.setDate(updated.getDate());
        return repository.save(existing);
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
