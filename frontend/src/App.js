import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import './App.css';
import PublicRoute from "./router/PublicRoute"
import PrivateRoute from "./router/PrivateRoute"

import Login from "./pages/login"
import Register from "./pages/register"
import Home from "./pages/home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute component={Home}/>} path="/home"></Route>
          <Route element={<PublicRoute component={Login}/>} path="/login"></Route>
          <Route element={<PublicRoute component={Register}/>} path="/register"></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
