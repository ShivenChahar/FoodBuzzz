import "./App.css";
import Home from "./screens/home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./screens/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from "./screens/Signup";
import { CartProvider } from "./components/ContextReducer";

function App() {
  return (
    <CartProvider>
    <Router>
      <div> 
        <Routes>
          <Route exact path = "/" element = {<Home/>} />
          <Route exact path = "/login" element = {<Login/>} />
          <Route exact path = "/signup" element = {<Signup/>} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  ); 
}
export default App;
