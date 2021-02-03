import { Header } from './features/header/Header';
import { Home } from './features/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Checkout } from './features/checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
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
