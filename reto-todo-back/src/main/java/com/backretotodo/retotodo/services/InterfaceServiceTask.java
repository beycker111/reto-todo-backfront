package com.backretotodo.retotodo.services;

import com.backretotodo.retotodo.entities.Task;

import java.util.List;

public interface InterfaceServiceTask {

    public List<Task> listAll();
    public Task listById(int id);
    public Task save(Task task);
    public void deleteById(int id);
    public Task update(Task task);
}
