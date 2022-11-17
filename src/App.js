
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer.js/ItemDetailContainer';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/category/:categoryName' element={<ItemListContainer></ItemListContainer>}></Route>
      <Route path='detail' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
      <Route path='cart' element={<Cart></Cart>}></Route>

    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
