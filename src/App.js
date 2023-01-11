import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import NotFound from "./components/NotFound.jsx";
import Cart from "./components/Cart.jsx";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div className="content-container">
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
