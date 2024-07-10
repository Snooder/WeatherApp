import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './components/common/WeatherBackdrop.css';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import AuthComponent from './components/auth/AuthComponent';
import CalendarPage from './pages/calendar/CalendarPage';
import HowToHelp from './pages/howtohelp/HowToHelp'; // Import HowToHelp component
import PrivateRoute from './components/common/PrivateRoute';
import NavBar from './components/common/NavBar';
import WeatherBackdrop from './components/common/WeatherBackdrop';
import Dashboard from './pages/home/Dashboard';

function App() {
  return (
    <Router>
      <Fragment>
        <WeatherBackdrop />
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} /> {/* Home route */}
            <Route path="/auth" element={<AuthComponent />} />
            <Route path="/profile" element={<AuthComponent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/calendar" element={<CalendarPage />} /> {/* Calendar route */}
            <Route path="/howtohelp" element={<HowToHelp />} /> {/* HowToHelp route */}
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
      </Fragment>
    </Router>
  );
}

export default App;
