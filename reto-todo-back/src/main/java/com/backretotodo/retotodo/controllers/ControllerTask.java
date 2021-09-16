package com.backretotodo.retotodo.controllers;

import com.backretotodo.retotodo.dto.TaskCategoryDTO;
import com.backretotodo.retotodo.entities.Task;
import com.backretotodo.retotodo.entities.TaskCategory;
import com.backretotodo.retotodo.services.InterfaceServiceTask;
import com.backretotodo.retotodo.services.InterfaceServiceTaskCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ControllerTask {

    @Autowired
    private InterfaceServiceTask servicio;

    @Autowired
    private InterfaceServiceTaskCategory servicioCategory;


    //ENDPOINTS PARA CATEGORIA
    @GetMapping(value = "/listTaskCategorys")
    public Iterable<TaskCategory> listTaskCategorys(){
        return servicioCategory.listAll();
    }

    @GetMapping(value = "/listTaskCategory/{id}")
    public TaskCategory listTaskCategory(@PathVariable("id") int id){
        return servicioCategory.listById(id);
    }

    @PutMapping(value = "/updateTaskCategory")
    public TaskCategory updateTaskCategory(@RequestBody TaskCategory taskCategory){
        Optional<TaskCategory> optionalTaskCategory = Optional.of(servicioCategory.listById(taskCategory.getId()));
        TaskCategory taskCategoryNew = null;
        if(!optionalTaskCategory.isPresent()){
            throw new RuntimeException("El id de la categoria no existe");
        }
        taskCategoryNew = optionalTaskCategory.get();
        taskCategoryNew.setName(taskCategory.getName());
        return servicioCategory.update(taskCategoryNew);

    }

    @PostMapping(value = "/saveTaskCategory")
    public TaskCategory saveTaskCategory(@RequestBody TaskCategory taskCategory){
        return servicioCategory.save(taskCategory);
    }

    @DeleteMapping("deleteTaskCategory/{id}")
    public void deleteTaskCategory(@PathVariable("id") int id){
        servicioCategory.deleteById(id);
    }

    //ENDPOINTS PARA TAREAS
    @GetMapping(value = "/listTasks")
    public Iterable<Task> listTasks(){
        return servicio.listAll();
    }

    @GetMapping(value = "/listTask/{id}")
    public Task listTask(@PathVariable("id") int id){
        return servicio.listById(id);
    }

    @PostMapping(value = "/saveTask")
    public TaskCategoryDTO saveTask(@RequestBody TaskCategoryDTO taskdto){
        Task task = new Task();
        task.setName(taskdto.getName());
        task.setCompleted(taskdto.isCompleted());

        Optional<TaskCategory> taskCategoryOptional = Optional.of(servicioCategory.listById(taskdto.getCategoryId()));
        if(taskCategoryOptional.isPresent()){
            task.setCategory(taskCategoryOptional.get());
        }

        return converToDto(servicio.save(task));
    }

    @PutMapping(value = "/updateTask")
    public TaskCategoryDTO updateTask(@RequestBody TaskCategoryDTO taskdto){
        Optional<Task> taskOptional = Optional.of(servicio.listById(taskdto.getId()));
        Task task = null;
        if(taskOptional.isPresent()){
            task = taskOptional.get();
            task.setName(taskdto.getName());
            task.setCompleted(taskdto.isCompleted());
        }
        return converToDto(servicio.update(task));
    }

    @DeleteMapping("deleteTask/{id}")
    public void deleteTask(@PathVariable("id") int id){
        servicio.deleteById(id);
    }

    private TaskCategoryDTO converToDto(Task task){
        TaskCategoryDTO taskCategoryDTO = new TaskCategoryDTO(task.getId(), task.getName(), task.isCompleted(), task.getCategory().getId());
        return taskCategoryDTO;
    }

}
