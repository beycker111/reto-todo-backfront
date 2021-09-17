//import React, { createContext, useContext, useReducer } from 'react';
import React from 'react';
import Form from './components/Form';
import List from './components/List';
import FormCategory from './components/FormCategory';
import ListCategory from './components/ListCategory';
import StoreProvider from './store/StoreProvider';

const HOST_API = "http://localhost:8080/api"


function App() {
  return (
    <StoreProvider>
      <div class="m-5">
        <FormCategory HOST_API={HOST_API} />
        <ListCategory HOST_API={HOST_API} />
      </div>
    </StoreProvider>
  );
}

export default App;
