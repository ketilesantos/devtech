import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Forgot from './pages/Forgot';
import LayoutPanel from './components/LayoutPanel';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutPanel />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/dashboard/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
