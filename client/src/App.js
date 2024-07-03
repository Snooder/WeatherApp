import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Fragment } from 'react';
import NavBar from './navBar';
import WeatherBackdrop from './WeatherBackdrop';
import './WeatherBackdrop.css';
function App() {
  return (
    <Router>
      <Fragment>
      <WeatherBackdrop />
        <div className="App">
          <NavBar></NavBar>
        </div>
      </Fragment>
    </Router>

  );
}

export default App;
