
import './App.css';
import Nav from './Components/Nav'
import ItemConteiner from './Components/ItemConteiner'
import ItemDetailConteiner from './Components/ItemDetailConteiner'
import Formulario from './Components/Formulario'

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
      <Route path="/Home">
        element={<ItemConteiner/>}
      </Route>
    </Switch>

    <Switch>
      <Route path="/Detalle">
        element ={<ItemDetailConteiner/>}
      </Route>
    </Switch>

    <Switch>
      <Route path="/Contacto">
        <Formulario/>
      </Route>
    </Switch>  

  </main>

  
</Router>
  </>
  )
}

export default App;
