import React from "react";
import DeviceContextProvider from "./contexts/DeviceContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Navbar from './components/Navbar';
import Dashboard from "./components/Dashboard";
import "./App.css";

const App = () => {
  return (
    <DeviceContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </DeviceContextProvider>
  );
};

export default App;
