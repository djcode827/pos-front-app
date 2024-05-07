import {BrowserRouter as Router, Routes, Link, Route} from "react-router-dom";
import './App.css'
import Home from "./components/Home";
import Product from "./components/Product";
import Customer from "./components/Customer";

function App() {


  return (
    <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/customer'}>Customer</Link>
              </li>
              <li>
                <Link to={'/product'}>Product</Link>
              </li>
              {/* <li></li>
              <li></li> */}
            </ul>
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
