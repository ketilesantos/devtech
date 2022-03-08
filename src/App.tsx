import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/dashboard/home" />} />
      </Routes>
    </Router>
  );
}

export default App;
