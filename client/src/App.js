import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Fragment } from 'react';
import NavBar from './NavBar';
import WeatherBackdrop from './WeatherBackdrop';
import './WeatherBackdrop.css';
import { auth, app } from './firebaseConfig';

function App() {
  return (
    <Router>
      <Fragment>
        <WeatherBackdrop />
        <div className="App">
          <NavBar />
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
