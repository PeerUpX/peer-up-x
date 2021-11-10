import { AuthProvider } from './contexts/AuthContext';
import SupporterLogin from './SupporterLogin';
import SupporterSignup from './SupporterSignup';
import Dashboard from './Dashboard';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {useAuth} from './contexts/AuthContext';
import ForgotPassword from './ForgotPassword';

function PrivateRoute({ children }) {
  const {currentUser} = useAuth();
  return currentUser ? children : <Navigate to="/login" />;
}

function App() {
  return (
      <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}      
      >
      <div className="w-100" style={{ maxWidth: "400px" }}>
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
        </Routes>
        </AuthProvider>
      </Router>
      </div>
      </Container>
  );
}

export default App;
