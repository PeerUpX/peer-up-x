//import { AuthProvider } from './contexts/AuthContext';
import SupporterLogin from './Pages/SupporterLogin';
import SupporterSignup from './Pages/SupporterSignup';
import SupporterDashboard from './Pages/Dashboard/SupporterDashboard'
import SupporterProfile from './Profile/SupporterProfile';
import UserDashboard from './User/UserDashboard';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
// import {useAuth} from './contexts/AuthContext';
import ForgotPassword from './Pages/ForgotPassword';
import LandingPage from './Layouts/Landing/LandingPage';

//className="d-flex align-items-center justify-content-center"

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<LandingPage/>} />
              <Route exact path="/signup" element={<SupporterSignup/>} />
              <Route exact path="/login" element={<SupporterLogin/>} />
              <Route exact path="/forgot-password" element={<ForgotPassword/>} />
            <Route
              path="/dashboard"
              element={
                <SupporterDashboard />
              }
            />    
            <Route
              path="/profile"
              element={
                <SupporterProfile />
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

export default App;
