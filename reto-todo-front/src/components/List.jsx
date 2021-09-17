import React, { useContext, useEffect } from 'react';
import Store from "../store/Store"

const List = (props) => {

    const { dispatch, state } = useContext(Store);
    
    
    useEffect(() => {
      fetch(props.HOST_API + "/listTaskCategorys")
          .then(response => response.json())
          .then((list) => {
            dispatch({ type: "update-list-category", list })
          })
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
  
    const onEdit = (todo) => {
      dispatch({ type: "edit-item", item: todo })
    };
  
    return <div>
      <table >
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
            return<tr key={index}>
                <td>{itemtodo.id}</td>
                <td>{itemtodo.name}</td>
                <td>{itemtodo.completed === true ? "SI" : "NO"}</td>
                <td><button onClick={() => onDelete(itemtodo.id)}>Eliminar</button></td>
                <td><button onClick={() => onEdit(itemtodo)}>Editar</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  }

  export default List;