import { useState, useContext } from 'react';
import { cartContext } from '../../context/CartProvider';
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = ({ productSelected }) => {
 
  const [count, setCount] = useState(0);
  const { cart, addToCart } = useContext(cartContext);
    
  
  return (
    <div>
      <h1>Esto es la cantidad de productos en tu carrito {cart.length}</h1>
      <img
        alt={productSelected.title}
        src={`/images/${productSelected.imageId}`}
        width={'300px'}
      />
      <h2>{productSelected.id}</h2>
      <h2>{productSelected.title}</h2>
      <h2>{productSelected.description}</h2>
      <h2>{productSelected.category}</h2>
      <h2>{productSelected.price}</h2>
      <h2>{count}</h2>
      <ItemCount> setCount={setCount} </ItemCount>
      <button onClick={() => addToCart(productSelected, count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemDetail;