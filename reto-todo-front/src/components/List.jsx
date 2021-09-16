import React, { useContext, useEffect } from 'react';
import Store from "../store/Store"

const List = (props) => {

    const { dispatch, state } = useContext(Store);
  
    useEffect(() => {
      fetch(props.HOST_API + "/todos")
        .then(response => response.json())
        .then((list) => {
          dispatch({ type: "update-list", list })
        })
    }, [state.list.lenght, dispatch]);
  
    const onDelete = (id) => {
      fetch(props.HOST_API + "/" + id + "/todo", {
        method: "DELETE"
      }).then((list) => {
        dispatch({ type: "delete-item", id })
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
          </tr>
        </thead>
        <tbody>
          {state.list.map((todo) => {
            return <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>{todo.isCompleted === true ? "SI" : "NO"}</td>
              <td><button onClick={() => onDelete(todo.id)}>Eliminar</button></td>
              <td><button onClick={() => onEdit(todo)}>Editar</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  }

  export default List;