
import './App.css';
import Nav from './Components/Nav'
import Card from './Components/Card'
import Footer from './Components/Footer'

function App() {

  return (
  <>
    <header>
      <Nav/>
    </header>

    <main>
      <Card 
        nombre="Asus"
        precio="$2000"
        id="1"
      />
      <Card
        nombre="Hp"
        precio="$1300"
        id="1"
      />
      <Card 
        nombre="Mac"
        precio="$4000"
        id="1"
      />
    </main>
  
    <article>
      
    </article>

    <footer>
      <Footer
        titulo="@EmanuelLopez"
      />
    </footer>
  </>
  )
}

export default App;
