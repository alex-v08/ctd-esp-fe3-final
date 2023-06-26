import {Route, Routes } from 'react-router-dom'
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Home from './Routes/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import {useContextGlobal} from "./utils/global.context";




function App() {
  const {state} = useContextGlobal()


  return (
    <div className ={state.theme}>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/dentist/:id' element={<Detail/>}/>
          <Route path='/favs' element={<Favs/>}/>
          <Route path='*' element={<h1>Page not found</h1>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App

