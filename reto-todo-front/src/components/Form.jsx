import React, { useContext, useRef, useState } from 'react'
import Store from "../store/Store"

const Form = (props) => {

    const formRef = useRef(null);
  
    const { dispatch, state: {item} } = useContext(Store);
    //const dispatch = value.dispatch;
    //const contextState = value.state;
  
    //const { dispatch } = useContext(Store); //Nos da un estado externo
    const [state, setState] = useState({item}); //Nos da un estado interno
  
    const onAdd = (event) => {
      event.preventDefault();
  
      const request = {
        name: state.name,
        id: null,
        completed: false,
        categoryId: props.catid
      };
  
      fetch(props.HOST_API + "/saveTask", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          //dispatch({ type: "add-item", item: todo });
          fetch(props.HOST_API + "/listTaskCategorys")
          .then(response => response.json())
          .then((list) => {
            dispatch({ type: "update-list-category", list })
          })
          setState({ name: "" });
          formRef.current.reset();
        });
    }
  
    const onEdit = (event) => {
      event.preventDefault();
  
      const request = {
        name: state.name,
        id: item.id,
        isCompleted: item.isCompleted
      };
  
  
      fetch(props.HOST_API + "/todo", {
        method: "PUT",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          dispatch({ type: "update-item", item: todo });
          setState({ name: "" });
          formRef.current.reset();
        });
    }
  
  
  
    return <form ref={formRef} onSubmit={onAdd} align="center" class="form-group">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
        <input
          type="text"
          class="form-control mb-2"
          name="name"
          placeholder="Agregar una nueva actividad"
          onChange={(event) => {
            setState({ ...state, name: event.target.value })
          }} required />
          <button class="btn btn-primary">Agregar</button>
        </div>
        <div className="col-md-4"></div>
      </div>
      
    </form>
  }

  export default Form;