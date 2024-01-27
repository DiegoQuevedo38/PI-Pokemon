import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import store from "./redux/store"
import React from 'react';
import App from './App';
import './index.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

