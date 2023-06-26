import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import Card from '../Components/Card'



const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      
      setData(res.data)
      console.log(data)
    
    })
    },[])

    const cardDent = data.map((dent) =>
    <div class="col-4">
    <Card  dent={dent} key={dent.id}/>
    </div>
    );
  
  return (

  

<div>
<h1>Home</h1>
  <div class="container">
    <div class="row">
    {cardDent}
    </div>
  </div>

</div>

  )
  }
export default Home