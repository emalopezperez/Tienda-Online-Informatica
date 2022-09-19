import './App.css';
import Nav from './Components/Nav'
import ItemConteiner from './Components/ItemConteiner'
import ItemDetailConteiner from './Components/ItemDetailConteiner'
import {Route, Routes} from 'react-router-dom'
import Cart from './Components/Cart';
import MyProvider from './Components/MyProvider ';
import "./Components/Firebase"
import Banners from './Components/Banners';
import {Footer} from'./Components/Footer'
import Formulario from './Components/Formulario';
import Contacto from './Components/Contacto';

function App() {
  return (
      <>
        <MyProvider>
          <header>
            <Nav/>
          </header>
          <main className='felx flex-wrap' >
            <Routes>
                <Route exact path="/" element={<ItemConteiner/>} />
                <Route exact path="/category/:category" element={<ItemConteiner/>} /> 
                <Route exact path="/detalle/:id" element={<ItemDetailConteiner/>} /> 
                <Route exact path="/category/Cart" element={<Cart/>}/> 
                <Route exact path="/formulario" element={<Formulario/>}/>
                <Route exact path="/contacto" element={<Contacto/>}/>
            </Routes> 
          </main>
        </MyProvider>
        
        <article>
            <Banners/>
        </article>
        <Footer/>
  </>)
}

export default App;
