import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ProfileListing from './pages/ProfileListing';
import ProfileDetail from './pages/ProfileDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile-listing" element={<ProfileListing />} />
        <Route path="/profile-detail/:id" element={<ProfileDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
