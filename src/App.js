
import './App.css';
import Nav from './Components/Nav'
import ItemConteiner from './Components/ItemConteiner'
import ItemDetailConteiner from './Components/ItemDetailConteiner'
import Formulario from './Components/Formulario'
import ItemList from './Components/ItemList'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {

  return (
  <>

<Router>
  <header>
    <Nav/>
  </header>

  <main>

  <Switch>
    <Route path="/detalle/:id">
        <ItemDetailConteiner/>
    </Route>

    <Route path="/">
        <ItemConteiner/>
    </Route>

  </Switch> 

  </main>

  
</Router>
  </>
  )
}

export default App;
