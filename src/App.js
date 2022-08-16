
import './App.css';
import Nav from './Components/Nav'
import ItemConteiner from './Components/ItemConteiner'
import ItemDetailConteiner from './Components/ItemDetailConteiner'
import {Route, Routes} from 'react-router-dom'
import Formulario from './Components/Formulario'


function App() {

      return (<>

          <header>
            <Nav/>
          </header>
          
          <main>
            <Routes>
                <Route exact path="/" element={<ItemConteiner/>} />
                <Route exact path="/detalle/:id" element={<ItemDetailConteiner/>} /> 
                <Route exact path="/category/shop"  element={<ItemConteiner/>}/>
                <Route exact path="/category/blog/:id"/> 
                <Route exact path="/contacto" element={<Formulario/>}/> 
                <Route exact path="/carrito"/> 
                
            </Routes> 
          </main>


  </>)
}

export default App;
