import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import Product from "./components/Product";
import Customer from "./components/Customer";

function App() {


  return (
    <Router>
        <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="navbar-brand">
      Logo
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        <a className="nav-link" href="#">Pricing</a>
        <a className="nav-link disabled" href="#" tabIndex='-1' aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
          <hr />


              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/customer" element={<Customer/>} />
                <Route path="/product" element={<Product/>} />
              </Routes>


        </div>
    </Router>
  )

}

export default App
