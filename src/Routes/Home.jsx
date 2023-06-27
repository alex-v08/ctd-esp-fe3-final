import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Card from '../Components/Card';

const initialState = {
  data: [],
  loading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          dispatch({ type: 'FETCH_SUCCESS', payload: res.data });
        })
        .catch(error => {
          dispatch({ type: 'FETCH_ERROR', payload: error.message });
        });
  }, []);

  const { data, loading, error } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const cardDent = data.map(dent => (
      <div className="col-3" key={dent.id}>
        <Card dent={dent} />
      </div>
  ));

  return (
      <div>
        <h1>Home</h1>
        <div className="container">
          <div className="row">{cardDent}</div>
        </div>
      </div>
  );
};

export default Home;

