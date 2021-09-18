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
                return <div class="border p-3 bg-light">
                    <div class="row border rounded bg-info p-1 mb-3">
                      <div class="col-md-9">
                        <span class="h4">{cat.name}</span>
                      </div>
                      <div class="col-md-3" align="right">
                        <button class="btn btn-danger" onClick={() => onDelete(cat.id)}>Eliminar</button>
                      </div>
                    </div>
                    <Form catid={cat.id} HOST_API={props.HOST_API} />
                    <List catid={cat.id} HOST_API={props.HOST_API} />
                </div>
            })}
        </div>
      
        </div>
  }

  export default ListCategory;