import About from "./About";
import HeadAndTail from "./HeadAndTail";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid ">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/headandtail" className="nav-link">
                    Head & Tail
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid my-5">
          <div className="row justify-content-center">
            <div className="col-4">
              <Routes className="routes">
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/headandtail" element={<HeadAndTail />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
