import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBotstrap from './components/NavbarBotstrap';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConteiner';
import Error from './components/Error';
import Footer from './components/footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', minHeight:'100vh'}}>
        <NavbarBotstrap/>
        <Routes>
          <Route path='/' element={<ItemListContainer Saludo="Bienvenido a nuestra tienda"/>}/>
          <Route path='/producto/:id' element={<ItemDetailContainer/>} />
          <Route path='*' element={<Error/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
