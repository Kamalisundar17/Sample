import React from 'react'

import { createRoot } from "react-dom/client";

import './index.css';
import {Provider} from 'react-redux';
import reducers from './reducers'
import {createStore, applyMiddleware,compose} from 'redux';
import {thunk} from 'redux-thunk';
import App from './App';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);


const store= createStore(reducers,compose(applyMiddleware(thunk)));

root.render(
  <React.StrictMode>
  <Provider store={store}>
   
    <App />
    
  </Provider>
  </React.StrictMode>
);