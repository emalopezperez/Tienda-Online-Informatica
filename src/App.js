
import './App.css';
import Nav from './Components/Nav'
import ItemConteiner from './Components/ItemConteiner'
import ItemDetailConteiner from './Components/ItemDetailConteiner'
import {Route, Routes} from 'react-router-dom'
import Cart from './Components/Cart';
import MyProvider from './Components/MyProvider ';
import "./Components/Firebase"
import {Footer} from'./Components/Footer'
import Banners from './Components/Banners';

function App() {
  
      return (
      <>
        <MyProvider>
          <header>
            <Nav/>
          </header>
          <main >
            <Routes>
                <Route exact path="/" element={<ItemConteiner/>} />
                <Route exact path="/category/:category" element={<ItemConteiner/>} /> 
                <Route exact path="/detalle/:id" element={<ItemDetailConteiner/>} /> 
                <Route exact path="/category/Cart" element={<Cart/>}/> 
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
