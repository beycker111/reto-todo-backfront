package com.backretotodo.retotodo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @NotNull
    private String name;
    @NotNull
    private boolean completed;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="task_category_id")
    @JsonIgnore
    @NotNull
    private TaskCategory category;

    public Task(Integer id, String name, boolean completed, TaskCategory category) {
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.category = category;
    }

    public Task() {
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

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public TaskCategory getCategory() {
        return category;
    }

    public void setCategory(TaskCategory category) {
        this.category = category;
    }

    @Override
    public String toString() {
        return "Task{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", completed=" + completed +
                ", category=" + category +
                '}';
    }
}
