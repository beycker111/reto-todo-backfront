package com.backretotodo.retotodo.repositories;

import com.backretotodo.retotodo.entities.TaskCategory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterfaceTaskCategoryRepository extends CrudRepository<TaskCategory, Integer> {
}
