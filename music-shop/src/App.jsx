import * as React from 'react';
import './App.css';
import Navbar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { createTheme } from '@mui/material/styles';
import { red, blue } from '@mui/material/colors';



function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer nombre="catalogo" />
    </div>
  );
}

export default App;
