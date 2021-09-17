import React, { useContext, useRef, useState, useEffect } from 'react'
import Store from "../store/Store"

const Edit = (props) => {

    const formRef = useRef(null);
  
    const { dispatch, state: {item}, state } = useContext(Store);
    //const dispatch = value.dispatch;
    //const contextState = value.state;
  
    //const { dispatch } = useContext(Store); //Nos da un estado externo
    const [stated, setState] = useState({item}); //Nos da un estado interno //State Tiene un item vacio

    
    //console.log(state);
    useEffect(() => {
        fetch(props.HOST_API + "/listTaskCategorys")
          .then(response => response.json())
          .then((list) => {
            dispatch({ type: "update-list-category", list })
          })
      }, [state.edit, dispatch]); //Cambiar la condición de refresco
  
    const onEdit = (event) => {
      event.preventDefault();

      const request = {
        name: stated.nameedit,
        id: item.id,
        completed: item.completed,
        categoryId: item.categoryId
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

          state.edit = !state.edit;
          stated.nameedit = '';
          setState({ item: {} });
          item.name = '';
          formRef.current.reset();
          
          //state.edit = !state.edit;
          //
        });
        
    }
  
  
  
    return <form ref={formRef}>
      <input
        type="text"
        name="nameedit"
        placeholder="Editar tarea"
        defaultValue={item.name}
        onChange={(event) => {
          setState({ ...stated, nameedit: event.target.value })
          console.log(stated.nameedit)
        }}  ></input>
        <button onClick={onEdit}>Actualizar</button>
      
    </form>
  }

  export default Edit;