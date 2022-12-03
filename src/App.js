
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer.js/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import CartProvider from './context/CartProvider';

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/category/:categoryName' element={<ItemListContainer/>}></Route>
      <Route path='item/:id' element={<ItemDetailContainer/>}></Route>
      <Route path='cart' element={<Cart></Cart>}></Route>

    </Routes>
    </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
