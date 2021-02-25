import React from 'react';
import CitySelector from './components/CitySelector';
import './App.css';
import {Container} from 'react-bootstrap';
import UseFetch from './hooks/UseFetch';
const API_BASE_URL = process.env.API_BASE_URL
const API_KEY = process.env.API_KEY

function App() {

  const {data, error, isLoading, setUrl} = UseFetch();

  return (
    <Container className="App">
      <CitySelector onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&appid=${API_KEY}`)} />
    </Container>
  );
}

export default App;
