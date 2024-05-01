import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import OtherPage from "./OtherPage";
import MainComponent from './MainComponent';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <Fragment>
      <header>
        <div>This is a multicontainer Weather app</div>
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
      </header>
      <div>
        <Route exact path="/" component={MainComponent} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
      </Fragment>
    </Router>
  
  );
}

export default App;
