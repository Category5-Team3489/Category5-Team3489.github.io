import React from "react";
import { useLocation, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/App.css";
import {BitcoinPrice} from "./components/API";
import Navbar from "./components/Navbar";
import { Navigate  } from 'react-router';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/bitcoin" element = {
            <BitcoinPrice />
          } />
          <Route path="/" element={
            <div>
              <NavigateToRedirectQuery />
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

function NavigateToRedirectQuery() {
  const { search } = useLocation();
  let query = React.useMemo(() => new URLSearchParams(search), [search]);
  let redirect = query.get("redirect");
  if (redirect == null) return <div />;
  return <Navigate to={redirect} />;
}

export default App;
