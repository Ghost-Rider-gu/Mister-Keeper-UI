import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layouts/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Login from "./components/auth/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
