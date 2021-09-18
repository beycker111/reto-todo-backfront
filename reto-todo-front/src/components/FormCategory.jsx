import React, { useContext, useRef, useState } from 'react'
import Store from "../store/Store"
import Edit from './Edit'

const FormCategory = (props) => {

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
        id: null
      };
  
  
      fetch(props.HOST_API + "/saveTaskCategory", {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((todo) => {
          dispatch({ type: "add-category", item: todo });
          setState({ name: "" });
          formRef.current.reset();
        });
    }
  
  
    return <div>
      <form ref={formRef} onSubmit={onAdd}>
        <input
          type="text"
          name="namecategory"
          placeholder="Ingrese una categoria"
          onChange={(event) => {
            setState({ ...state, name: event.target.value })
          }} required />
          <button>Agregar</button>
          <br/><br/>
      </form>
      <Edit HOST_API={props.HOST_API}/>
      <br/><br/>
    </div>
    
  }

  export default FormCategory;