import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import QuemSomos from './components/QuemSomos';
import Contato from './components/Contato';

function App() {


  return (
    <div className="App">
      
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/quem-somos' element={<QuemSomos/>}/>
          <Route path='/contato' element={<Contato/>}/>
        </Routes>
      </Router>
      

        
    </div>
  );
}

export default App;
