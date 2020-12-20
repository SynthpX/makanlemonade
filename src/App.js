import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './halaman/homepage/homepage.component';


const pageTopi = () => (
  <div>
    <h1>Halaman Topi</h1>
  </div>
);

function App() {
  return(
    <div>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/topi' component={pageTopi}/>
    </Switch>
  </div>
  );
}

export default App;
