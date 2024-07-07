import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Fragment } from 'react';
import NavBar from './NavBar';
import WeatherBackdrop from './WeatherBackdrop';
import './WeatherBackdrop.css';
import { auth, app, analytics } from './firebaseConfig';
import PrivateRoute from './PrivateRoute';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <Fragment>
        <WeatherBackdrop />
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
