import React, { useContext, useEffect, useState } from 'react';
import Store from "../store/Store"

const List = (props) => {

    const { dispatch, state } = useContext(Store);
    
    const updateCategoryList = () => {
      fetch(props.HOST_API + "/listTaskCategorys")
      .then(response => response.json())
      .then((list) => {
        dispatch({ type: "update-list-category", list })
      })
    }

    useEffect(() => {
      updateCategoryList();
    }, [state.list.lenght, dispatch]);
    
  
    //Aqu+i debemos devolver nuevamente la lista actualizada de categorias y remplazar
    const onDelete = (id) => {
      fetch(props.HOST_API + "/deleteTask/" + id, {
        method: "DELETE"
      }).then((list) => {
        fetch(props.HOST_API + "/listTaskCategorys")
        .then(response => response.json())
        .then((list) => {
          dispatch({ type: "update-list-category", list })
        })
      })
    };

    const onCheckboxChange = () =>{

      //event.preventDefault();

      const request = {
        name: state.item.name,
        id: state.item.id,
        completed: state.item.completed,
        categoryId: props.catid
      };
      
      fetch(props.HOST_API + "/updateTask", {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          //dispatch({ type: "update-item", item: todo });
          updateCategoryList();
          state.item = {};
        });
        
    }
  
    const onEdit = (todo) => {
      todo.categoryId = props.catid;
      state.nameedit = todo.name;
      state.edit = true;
      dispatch({ type: "edit-item", item: todo })
    };
  
    return <div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
          <table class="mt-2 table">
            <thead>
              <tr>
                <td>ID</td>
                <td>Nombre</td>
                <td>¿Completado?</td>
                <td>Eliminar</td>
                <td>Editar</td>
              </tr>
            </thead>
            <tbody>
              {state.list.find((todo) => todo.id == props.catid).tasks.map((itemtodo, index) => {
                var campoDisabled = true;
                return<tr key={index}>
                    <td>{itemtodo.id}</td>
                    <td>{itemtodo.name} </td>
                    <td>{/*itemtodo.completed === true ? "SI" : "NO"*/}<input type="checkbox" checked={itemtodo.completed} onChange={(event) => {
                    console.log(itemtodo.completed);
                    itemtodo.completed = !itemtodo.completed
                    state.item = itemtodo;
                    onCheckboxChange();
                    //console.log(itemtodo.completed)
            }}></input></td>
                    <td><button onClick={() => onDelete(itemtodo.id)}>Eliminar</button></td>
                    <td><button onClick={() => {
                      onEdit(itemtodo);
                    }}>Editar</button></td>
                </tr>
              })}
            </tbody>
          </table>
          </div>
          <div className="col-md-3"></div>
        </div>
      
    </div>
  }

  export default List;