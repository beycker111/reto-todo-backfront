package com.backretotodo.retotodo.services;

import com.backretotodo.retotodo.entities.TaskCategory;

import java.util.List;

public interface InterfaceServiceTaskCategory {

    public List<TaskCategory> listAll();
    public TaskCategory listById(int id);
    public TaskCategory save(TaskCategory task);
    public void deleteById(int id);
    public TaskCategory update(TaskCategory task);
}
