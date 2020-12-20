import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './halaman/homepage/homepage.component';
import ShopPage from './halaman/shop/shop.component.jsx';
import Header from './komponen/header/header.component.jsx';
import SignInAndSignUpPage from './halaman/signin-and-signup/signin-and-signup.component';

function App() {
  return(
    <div>
      <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path ='/signin' component={SignInAndSignUpPage}/>
    </Switch>
  </div>
  );
}

export default App;
