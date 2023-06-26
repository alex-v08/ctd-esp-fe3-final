import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [data, setData] = useState([])
  const params = useParams();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    .then(res => {
      setData(res.data)
    })
    },[params.id])
  return (
    <>
      <h1>Detail Dentist {data.id} </h1>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Webside</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>{data.email}</td>
          <td>{data.phone}</td>
          <td>{data.website}</td>
        </tr>
      </tbody>
    </Table>

    </>
  )
}

export default Detail