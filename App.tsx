
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { StoreProvider, useStore } from './store/StoreContext';
import { UserRole } from './types';

// Pages
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import ChatPage from './pages/ChatPage';
import StudyPlanPage from './pages/StudyPlanPage';
import AnalyticsPage from './pages/AnalyticsPage';
import FacultyPage from './pages/FacultyPage';

// Components
import Sidebar from './components/Sidebar';

const ProtectedRoute = ({ children, role }: { children: React.ReactNode, role?: UserRole }) => {
  const { user } = useStore();
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return <>{children}</>;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useStore();
  return (
    <div className="flex min-h-screen bg-slate-50">
      {user && <Sidebar />}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<ProtectedRoute><Layout><Dashboard /></Layout></ProtectedRoute>} />
      <Route path="/chat" element={<ProtectedRoute><Layout><ChatPage /></Layout></ProtectedRoute>} />
      <Route path="/plan" element={<ProtectedRoute><Layout><StudyPlanPage /></Layout></ProtectedRoute>} />
      <Route path="/analytics" element={<ProtectedRoute><Layout><AnalyticsPage /></Layout></ProtectedRoute>} />
      <Route path="/faculty" element={<ProtectedRoute role={UserRole.FACULTY}><Layout><FacultyPage /></Layout></ProtectedRoute>} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <AppRoutes />
      </Router>
    </StoreProvider>
  );
};

export default App;
