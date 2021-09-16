package com.backretotodo.retotodo.dto;

public class TaskCategoryDTO {

    private int id;
    private String name;
    private boolean completed;
    private Integer categoryId;

    public TaskCategoryDTO() {
    }

    public TaskCategoryDTO(int id, String name, boolean completed, Integer categoryId) {
        this.id = id;
        this.name = name;
        this.completed = completed;
        this.categoryId = categoryId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }
}
