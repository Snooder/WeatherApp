import React from "react";
import './navBar.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import MainComponent from './Dashboard';
import { Typography } from "@mui/material";

const NavBar = () => {

    return (
        <div>
            <header className='NavBar'>
                <div className="logo">
                    <Typography>
                        This is a multicontainer Weather app
                    </Typography>
                </div>
                <nav className="navLinks">
                    <Link to="/">Home</Link>
                    <Link to="/otherpage">Other Page</Link>
                </nav>
            </header>
            <div>
                <Route exact path="/" component={MainComponent} />
                <Route path="/otherpage" component={OtherPage} />
            </div>
        </div>

    )
}

export default NavBar;
