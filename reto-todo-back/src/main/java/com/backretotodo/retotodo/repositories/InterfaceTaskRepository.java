package com.backretotodo.retotodo.repositories;

import com.backretotodo.retotodo.entities.Task;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterfaceTaskRepository extends CrudRepository<Task, Integer> {
}
