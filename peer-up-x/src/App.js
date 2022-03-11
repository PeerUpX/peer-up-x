//import { AuthProvider } from './contexts/AuthContext';
import SupporterLogin from './Pages/SupporterLogin';
import SupporterSignup from './Pages/SupporterSignup';
import SupporterDashboard from './Pages/Dashboard/SupporterDashboard'
import SupporterProfile from './Profile/SupporterProfile';
import UserDashboard from './User/UserDashboard';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import {useAuth} from './contexts/AuthContext';
import ForgotPassword from './Pages/ForgotPassword';
import LandingPage from './Layouts/Landing/LandingPage';
import Cookies from 'js-cookie';
import React from 'react';

//className="d-flex align-items-center justify-content-center"

class App extends React.Component {

  state = {
    userDetails: (Cookies.get('info') ? Cookies.get('info').substring(2) : undefined)
  }
  

  render() {
    console.log(this.state.userDetails);
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signup" element={<SupporterSignup />} isLoggedIn={!!this.state.userDetails} userInfo={this.state.userDetails}/>
          <Route exact path="/login" element={<SupporterLogin />} isLoggedIn={!!this.state.userDetails} userInfo={this.state.userDetails}/>
          <Route exact path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/dashboard"
            element={
              <SupporterDashboard />
            }
          />
          <Route
            path="/profile"
            element={
              <SupporterProfile userInfo={this.state.userDetails} />
            }

          />
          <Route
            path="/user"
            element={
              <UserDashboard />
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
