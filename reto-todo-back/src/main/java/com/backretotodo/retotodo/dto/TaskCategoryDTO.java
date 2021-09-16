package com.backretotodo.retotodo.dto;

public class TaskCategoryDTO {

    private int taskId;
    private String taskName;
    private boolean taskCompleted;
    private Integer categoryId;

    public TaskCategoryDTO() {
    }

    public TaskCategoryDTO(int taskId, String taskName, boolean taskCompleted, Integer categoryId) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.taskCompleted = taskCompleted;
        this.categoryId = categoryId;
    }

    public int getTaskId() {
        return taskId;
    }

    public void setTaskId(int taskId) {
        this.taskId = taskId;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public boolean isTaskCompleted() {
        return taskCompleted;
    }

    public void setTaskCompleted(boolean taskCompleted) {
        this.taskCompleted = taskCompleted;
    }

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }
}
