import { AuthProvider } from './contexts/AuthContext';
import SupporterLogin from './SupporterLogin';
import SupporterSignup from './SupporterSignup';
import Dashboard from './Dashboard';
import SupporterProfile from './SupporterProfile';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {useAuth} from './contexts/AuthContext';
import ForgotPassword from './ForgotPassword';

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
              <Route exact path="/signup" element={<SupporterSignup/>} />
              <Route exact path="/login" element={<SupporterLogin/>} />
              <Route exact path="/forgot-password" element={<ForgotPassword/>} />
            <Route
              path="/dashboard"
              element={
              <PrivateRoute>
                <Dashboard />
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
