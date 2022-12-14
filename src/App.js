import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Products from './components/Products';
import { Nav } from 'react-bootstrap';
import SingleProduct from "./components/SingleProduct";
import About from "./components/About";


function App() {
  return <Router>
    <div className="container">
      <Nav
        variant="pills"
      >
        <Nav.Item>
          <Link to="/" className={`nav-link ${document.location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about" className={`nav-link ${document.location.pathname === '/about' ? 'active' : ''}`}>About</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/products" className={`nav-link ${document.location.pathname === '/products' ? 'active' : ''}`}>Products</Link>
        </Nav.Item>

      </Nav>

      <Switch>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product/:productId">
          <SingleProduct />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <h1>Home</h1>
        </Route>
      </Switch>

    </div>
  </Router>
}

export default App;

