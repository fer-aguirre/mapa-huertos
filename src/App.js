import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Menu from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Mapa from './components/mapa/mapa';


function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route exact path="/">
          <Mapa />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
