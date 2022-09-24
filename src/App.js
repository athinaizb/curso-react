import './App.css';
import './components/navBar/NavBar.css';
import './components/ItemCount/ItemCount.css';
import './components/item/item.css';
import './components/itemList/itemList.css';
import './components/itemDetail/itemDetail.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemsListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer greeting={'Bienvenido a mi tienda de pastelería artesanal'} />}>
        </Route>
        <Route path="/category/:id" element={<ItemListContainer greeting={'Bienvenido a mi tienda de pastelería artesanal'} />
        }>
        </Route>
        <Route exact path="/item/:id" element={<ItemDetailContainer></ItemDetailContainer>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
