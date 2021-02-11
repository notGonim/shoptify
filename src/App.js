import { Header } from './features/header/Header';
import { Home } from './features/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Checkout } from './features/checkout/Checkout';
import { Login } from './features/auth/login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{ }, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('autherized user')
      if (authUser) {
        dispatch(
          {
            type: "SET_USER",
            user: authUser
          }
        )
      } else {
        dispatch(
          {
            type: "SET_USER",
            user: null
          }
        )

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
