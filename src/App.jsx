
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Grilla from './Componentes/Grilla'



const App =()=> {
  
  return (
    <>
      <Header titulo = 'Adopta un perrito'/>
      <Grilla/>
      <Footer texto={<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, perspiciatis!</p>}/>

    </>
  )
}

export default App;
