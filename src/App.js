import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './halaman/homepage/homepage.component';
import ShopPage from './halaman/shop/shop.component.jsx';
import Header from './komponen/header/header.component.jsx';
import SignInAndSignUpPage from './halaman/signin-and-signup/signin-and-signup.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    });
  }

  componentWillUnmount = () => {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path ='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
    );
  }
  
}

export default App;
