//import React, { createContext, useContext, useReducer } from 'react';
import React from 'react';
import Form from './components/Form';
import List from './components/List';
import StoreProvider from './store/StoreProvider';

const HOST_API = "http://localhost:8080/api"


function App() {
  return (
    <StoreProvider>
      <Form HOST_API={HOST_API} />
      <List HOST_API={HOST_API} />
    </StoreProvider>
  );
}

export default App;
