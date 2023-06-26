import React from 'react'
import {Link} from "react-router-dom"
import Nav from 'react-bootstrap/Nav';
import Navbar2 from 'react-bootstrap/Navbar';
import { useContextGlobal } from './utils/global.context'

const Navbar = () => {
  const {state,dispatch} = useContextGlobal()

  return (
  <header>
    <nav>

      <Navbar2 className="navegacion" >
 
      <Navbar2.Brand href="#home">
        <span style={{color:"red"}}>D</span>H Odonto 
      </Navbar2.Brand>

      <Nav  className="me-auto nav" >
        <div>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/favs'>Favs</Link>
        </div>
        <div>
          <button onClick={()=>state.theme==="" ? dispatch({type:"dark"}) : dispatch({type:"light"})} style={{background:"black", borderRadius:"6px"}} >🌙</button> 
        </div> 
      </Nav>
      </Navbar2>
    </nav>
  </header>
  )
}

export default Navbar