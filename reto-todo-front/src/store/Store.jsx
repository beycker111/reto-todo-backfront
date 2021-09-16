import React, { createContext } from 'react';
import initialState from './InitialState';

const Store = createContext(initialState);

export default Store;