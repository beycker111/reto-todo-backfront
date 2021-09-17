import React, { useContext, useEffect } from 'react';
import Store from "../store/Store"
import Form from './Form'
import List from './List'

const ListCategory = (props) => {

    const { dispatch, state } = useContext(Store);
  
    useEffect(() => {
      fetch(props.HOST_API + "/listTaskCategorys")
        .then(response => response.json())
        .then((list) => {
          dispatch({ type: "update-list-category", list })
        })
    }, [state.list.lenght, dispatch]);
  
    const onDelete = (id) => {
      fetch(props.HOST_API + "/deleteTaskCategory/" + id, {
        method: "DELETE"
      }).then((list) => {
        dispatch({ type: "delete-category", id })
      })
    };
  
    return <div>
        <div>
            {state.list.map((cat) => {
                return <div>
                    <p> <h3>{cat.name}</h3> <button onClick={() => onDelete(cat.id)}>Eliminar</button></p>
                    <Form catid={cat.id} HOST_API={props.HOST_API} />
                    <List catid={cat.id} HOST_API={props.HOST_API} />
                    <hr/>
                </div>
            })}
        </div>
      
        </div>
  }

  export default ListCategory;