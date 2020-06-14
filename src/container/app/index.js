import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../pages/home";
import Register from "../pages/register";

function App() {
  return (
    <Router>
      <Route path="/ppdb-sekolah" exact component={Home} />
      <Route path="/register" component={Register} />
    </Router>
  );
}

export default App;
