import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
