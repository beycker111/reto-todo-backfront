package com.backretotodo.retotodo.services;

import com.backretotodo.retotodo.entities.Task;
import com.backretotodo.retotodo.repositories.InterfaceTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceTask implements InterfaceServiceTask{

    @Autowired
    private InterfaceTaskRepository data;

    @Override
    public List<Task> listAll() {
        return (List<Task>) data.findAll();
    }

    @Override
    public Task listById(int id) {
        return data.findById(id).get();
    }

    @Override
    public Task save(Task task) {
        return data.save(task);
    }

    @Override
    public void deleteById(int id) {
        data.deleteById(id);
    }

    @Override
    public Task update(Task task) {
        return data.save(task);
    }
}
