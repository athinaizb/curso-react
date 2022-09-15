import './App.css';
import './components/navBar/NavBar.css';
import './components/ItemCount/ItemCount.css';
import './components/item/item.css'
import './components/itemList/itemList.css'
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemsListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Bienvenido a mi tienda de pastelería artesanal'} />
    </>
  );
}

export default App;
