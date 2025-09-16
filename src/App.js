import logo from './logo.svg';
import './App.css';
import {Header} from '../src/components/Header'
import {Home} from '../src/components/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Error404 } from './components/Error404';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="*" element={<Error404/>}/>
        </Routes>

      </BrowserRouter>
      
      <Home/>
    </div>
  );
}

export default App;
