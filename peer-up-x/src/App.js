import { AuthProvider } from './contexts/AuthContext';
import SupporterLogin from './SupporterLogin';
import SupporterSignup from './SupporterSignup';
import SupporterDashboard from './Dashboard/SupporterDashboard'
import SupporterProfile from './Profile/SupporterProfile';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {useAuth} from './contexts/AuthContext';
import ForgotPassword from './ForgotPassword';
import LandingPage from './Landing/LandingPage';

//className="d-flex align-items-center justify-content-center"
function PrivateRoute({ children }) {
  const {currentUser} = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
}

function App() {
  return (
      <Router>
        <AuthProvider>
          <Routes>
              <Route exact path="/" element={<LandingPage/>} />
              <Route exact path="/signup" element={<SupporterSignup/>} />
              <Route exact path="/login" element={<SupporterLogin/>} />
              <Route exact path="/forgot-password" element={<ForgotPassword/>} />
            <Route
              path="/dashboard"
              element={
              <PrivateRoute>
                <SupporterDashboard />
              </PrivateRoute>
              }
            />    
            <Route
              path="/profile"
              element={
              <PrivateRoute>
                <SupporterProfile />
              </PrivateRoute>
              }
            />           
        </Routes>
        </AuthProvider>
      </Router>
  );
}

export default App;
