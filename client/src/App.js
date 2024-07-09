import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import WeatherBackdrop from './WeatherBackdrop';
import './WeatherBackdrop.css';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import AuthComponent from './AuthComponent';
import CalendarPage from './CalendarPage'; // Import CalendarPage component
import OtherPage from './OtherPage'; // Import OtherPage component
import PrivateRoute from './PrivateRoute'; // Import updated PrivateRoute

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
            <Route path="/calendar" element={<CalendarPage />} /> {/* Add Calendar route */}
            <Route path="/otherpage" element={<OtherPage />} /> {/* Add OtherPage route */}
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
