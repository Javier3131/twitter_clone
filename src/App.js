import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
      </div>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
