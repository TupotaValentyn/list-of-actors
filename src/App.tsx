import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import { routes } from './components/configs/routes';
import { AppBar, Toolbar } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <AppBar position="sticky">
        <Toolbar>
          Actors
        </Toolbar>
      </AppBar>
      <BrowserRouter>
        <Switch>
          {routes.map((route) => {
            return <Route key={route.path} {...route}/>
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
