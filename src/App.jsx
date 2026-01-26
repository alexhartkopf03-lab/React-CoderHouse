import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarBotstrap from './components/NavbarBotstrap';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailConteiner';
import Footer from './components/footer';

function App() {

  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', minHeight:'100vh'}}>
      <NavbarBotstrap/>
      {/* <ItemListContainer Saludo="Bienvenido a nuestra tienda"/> */}
      <ItemDetailContainer/>
      <Footer/>    
    </div>
  )
}

export default App
