import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from "./Components/utils/global.context"
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'
import "./index.css";



const root = ReactDOM.createRoot(document.getElementById("root"));
//Recuerda configurar tus rutas y contexto aquí
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <App />
      </ContextProvider>  
    </BrowserRouter>
  </React.StrictMode>  
);



