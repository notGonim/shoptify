import { Header } from './features/header/Header';
import { Home } from './features/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Checkout } from './features/checkout/Checkout';
import { Login } from './features/auth/login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';

function App() {







  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('autherized user')
      if(authUser){

      }else{
        
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
