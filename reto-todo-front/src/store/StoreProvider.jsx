import React, { useReducer } from 'react';
import Store from './Store';
import initialState from './InitialState'

function reducer(state, action) {
    switch (action.type) {
      case 'update-item':
        const listUpdateEdit = state.list.map((item) => {
          if(item.id === action.item.id){
            return action.item;
          }
          return item;
        });
        return { ...state, list: listUpdateEdit, item: {} }
      case 'delete-item':
        const listUpdate = state.list.filter((item) => {
          return item.id !== action.id;
        });
        return { ...state, list: listUpdate }
      case 'update-list':
        return { ...state, list: action.list }
      case 'edit-item':
        return { ...state, item: action.item }
      case 'add-item':
        const newList = state.list;
        newList.push(action.item);
        return { ...state, list: newList }
      default:
        return state;
    }
  }

  const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //dispatch nos permite notificar a reducer que cambios quiere que pase al sistema orintado a una accion
    return <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  
  }

  export default StoreProvider;
