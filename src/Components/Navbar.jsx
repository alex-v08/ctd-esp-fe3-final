import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from './utils/routes';
import { useContextGlobal } from './utils/global.context';

import styles from './Navbar.module.css';

const Navbar = () => {
  const {state,dispatch} = useContextGlobal()
  return (
    <header >
   
      <nav >
        <Link to={routes.home}>Home</Link>
        <Link to={routes.favs}>Favs</Link>
        <Link to={routes.contact}>Contact</Link>
        <div>
          <button onClick={()=>state.theme==="" ? dispatch({type:"dark"}) : dispatch({type:"light"})} style={{background:"black", borderRadius:"6px"}} >🌙</button> 
        </div> 
        
      </nav>
    </header>
  );
}

export default Navbar;
