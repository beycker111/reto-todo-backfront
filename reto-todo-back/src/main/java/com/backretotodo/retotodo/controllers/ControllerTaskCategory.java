package com.backretotodo.retotodo.controllers;

import com.backretotodo.retotodo.entities.TaskCategory;
import com.backretotodo.retotodo.services.InterfaceServiceTaskCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


public class ControllerTaskCategory {

    /*
    @Autowired
    private InterfaceServiceTaskCategory servicio;

    @GetMapping(value = "/listTaskCategorys")
    public Iterable<TaskCategory> listTaskCategorys(){
        return servicio.listAll();
    }

    @GetMapping(value = "/listTaskCategory/{id}")
    public TaskCategory listTaskCategory(@PathVariable("id") int id){
        return servicio.listById(id);
    }

    @PostMapping(value = "/saveTaskCategory")
    public TaskCategory saveTaskCategory(@RequestBody TaskCategory taskCategory){
        return servicio.save(taskCategory);
    }

    @PutMapping(value = "/updateTaskCategory")
    public TaskCategory updateTaskCategory(@RequestBody TaskCategory taskCategory){
        return servicio.update(taskCategory);
    }

    @DeleteMapping("deleteTaskCategory/{id}")
    public void deleteTaskCategory(@PathVariable("id") int id){
        servicio.deleteById(id);
    }

     */
}
