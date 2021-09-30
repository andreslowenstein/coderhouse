import * as React from 'react';
import './App.css';
import Navbar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemCount/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {

  const onAdd = (counter) => {
    console.log(`Se agregaron ${counter} items al carrito`);
  }

  return (
    <div className="App">
      <Navbar />
      <ItemListContainer nombre="catalogo" />
      <ItemCount stock={10} initial={1} onAdd={onAdd} />
    </div>
  );
}

export default App;
