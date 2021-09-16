package com.backretotodo.retotodo.services;

import com.backretotodo.retotodo.entities.TaskCategory;
import com.backretotodo.retotodo.repositories.InterfaceTaskCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceTaskCategory implements InterfaceServiceTaskCategory{

    @Autowired
    private InterfaceTaskCategoryRepository data;

    @Override
    public List<TaskCategory> listAll() {
        return (List<TaskCategory>) data.findAll();
    }

    @Override
    public TaskCategory listById(int id) {
        return data.findById(id).get();
    }

    @Override
    public TaskCategory save(TaskCategory task) {
        return data.save(task);
    }

    @Override
    public void deleteById(int id) {
        data.deleteById(id);
    }

    @Override
    public TaskCategory update(TaskCategory task) {
        return data.save(task);
    }
}
