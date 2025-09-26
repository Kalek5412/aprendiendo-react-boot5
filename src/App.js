import logo from './logo.svg';
import './App.css';
import { Header} from '../src/components/Header'
import {Home} from '../src/components/Home'
import {Doctor} from '../src/components/Doctor'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Error404 } from './components/Error404';
import { Mensaje } from './components/Mensaje';
import { Formulario } from './components/crud/Formulario';


function App() {
  return (
    <div className="App">
      <Formulario></Formulario>
      
{/*       <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/doctores" element={<Doctor/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/mensajes" element={<Mensaje/>}/>
          <Route exact path="*" element={<Error404/>}/>
        </Routes>
      </BrowserRouter> */}
      
    </div>
  );
}

export default App;
