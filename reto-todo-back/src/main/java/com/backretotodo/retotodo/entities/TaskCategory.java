package com.backretotodo.retotodo.entities;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class TaskCategory {

    @Id
    @GeneratedValue
    private Integer id;
    @NotNull
    private String name;

    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Task> tasks;

    public TaskCategory(Integer id, String name, List<Task> tasks) {
        this.id = id;
        this.name = name;
        this.tasks = tasks;
    }

    public TaskCategory() {
        this.tasks = new ArrayList<>();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> task) {
        this.tasks = task;
    }

    public void addTask(Task task){
        if(this.tasks == null)
            this.tasks = new ArrayList<>();

        this.tasks.add(task);
        task.setCategory(this);
    }

    @Override
    public String toString() {
        return "TaskCategory{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", tasks=" + tasks +
                '}';
    }
}
