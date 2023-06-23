import React from 'react'
import { Link } from 'react-router-dom'
import {routes }  from './utils/routes' //Aqui deberan importar las rutas
import { Switch, Route } from 'react-router-dom'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {
    return (
      <header>
      <a>DH Odonto</a>
        <nav >
           
              
                    <Link to={routes.home}>Home</Link>
                
               
                    <Link to={routes.favs}>Favs</Link>
              
                
                    <Link to={routes.contact}>Contact</Link>
               
           
        </nav>
      </header>





    )
}


export default Navbar