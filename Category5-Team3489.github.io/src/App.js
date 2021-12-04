import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/App.css";
import {BitcoinPrice} from "./components/API";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/:bitcoin" element = {
            <BitcoinPrice />
          } />
          <Route path="/" element={
            <div>
              Hello, World! <br/>
              Hola!
            </div>
          } />
        </Routes>
      </Router>
      <div className="Background"/>
    </div>
  );
}

export default App;
