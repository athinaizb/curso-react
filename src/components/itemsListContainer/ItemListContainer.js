import React from 'react'
import ItemCount from '../ItemCount/ItemCount';


const ItemListContainer = (props) => {
  const { greeting } = props;

  const onAdd=(value)=>{
    alert (value);
  }
  return (
    <>
      <p>{greeting}</p>
      <ItemCount initial={1} stock={5} onAdd ={onAdd}/>
    </>
  )
}

export default ItemListContainer;