import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBotstrap from './components/NavbarBotstrap';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <NavbarBotstrap/>
      <ItemListContainer Saludo="Bienvenido a nuestra tienda"/>
    </>
  )
}

export default App
