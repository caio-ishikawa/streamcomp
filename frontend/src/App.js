import Axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './templates/Login';
import Homepage from './templates/Homepage';
import Register from './templates/Register';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
