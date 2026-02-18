import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBotstrap from './components/NavbarBotstrap';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConteiner';
import Error from './components/Error';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import CheckOut from './components/CheckOut';

function App() {

  return (
    <BrowserRouter>
      <div className='contPrincipal'>
        <CartProvider>
        <NavbarBotstrap/>
          <Routes>
            <Route path='/' element={<ItemListContainer Saludo="Bienvenido a nuestra tienda"/>}/>
            <Route path='/categoria/:tipo' element={<ItemListContainer Saludo="Categoria seleccionada: "/>}/>
            <Route path='/producto/:id' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<CartContainer/>} />
            <Route path='/checkout' element={<CheckOut/>} />
            <Route path='*' element={<Error/>}/>
          </Routes>
        </CartProvider>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
