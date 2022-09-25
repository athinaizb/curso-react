import './App.css';
import './components/navBar/NavBar.css';
import './components/ItemCount/ItemCount.css';
import './components/item/item.css';
import './components/itemList/itemList.css';
import './components/itemDetail/itemDetail.css';
import './components/itemsListContainer/ItemListContainer.css'
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
        <Route exact path="/" element={<ItemListContainer greeting={'¡Bienvenido a Athina pastelería!'} />}>
        </Route>
        <Route path="/category/:id" element={<ItemListContainer greeting={'¡Bienvenido a Athina pastelería!'} />
        }>
        </Route>
        <Route path="/item/:id" element={<ItemDetailContainer></ItemDetailContainer>}>
        </Route>
        <Route path="/cart" element={<></>}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
