import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/common/WeatherBackdrop.css';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import AuthComponent from './components/auth/AuthComponent';
import CalendarPage from './pages/calendar/CalendarPage';
import HowToHelp from './pages/howtohelp/HowToHelp';
import PrivateRoute from './components/common/PrivateRoute';
import NavBar from './components/common/NavBar';
import WeatherBackdrop from './components/common/WeatherBackdrop';
import Dashboard from './pages/home/Dashboard';

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <Router>
      <Fragment>
        <WeatherBackdrop isNightMode={isNightMode} />
        <div className="App">
          <NavBar toggleNightMode={toggleNightMode} />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/auth" element={<AuthComponent />} />
              <Route path="/profile" element={<AuthComponent />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/howtohelp" element={<HowToHelp />} />
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
