import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './css/App.css';
import {BitcoinPrice} from './components/API';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <div>
              Hello, World! <br/>
              Hola!
            </div>
          } />
          <Route path="/bitcoin" element = {
            <BitcoinPrice />
          } />
        </Routes>
      </Router>
      <div className='Background'/>
    </div>
  );
}

export default App;
