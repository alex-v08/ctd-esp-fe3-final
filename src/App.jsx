
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Favs from './Routes/Favs';
import Contact from './Routes/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'





/* Paso 1: Creación de rutas */
/* Importa los componentes pertinentes para envolver la App y crear el enrutado de la página. No importa que aún no tengamos los componentes que irán en cada vista, por el momento podes dejar solamente un div.
 */function App() {


  return (
     <>
     <Navbar/>
    
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/home" element={<Favs/>} />
       <Route path="/contact" element={<Contact/>} />
     </Routes> 
      
      

       </>
      
  );
}

export default App;
