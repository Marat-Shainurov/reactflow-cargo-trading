import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRouter from './AppRouter';
import MapPage from './MapPage';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<AppRouter />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
