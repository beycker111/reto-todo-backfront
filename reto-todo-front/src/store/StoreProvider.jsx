import React, { useReducer } from 'react';
import Store from './Store';
import initialState from './InitialState'
import { reducer } from './Reducer'


const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //dispatch nos permite notificar a reducer que cambios quiere que pase al sistema orintado a una accion
    return <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  
}

  export default StoreProvider;
