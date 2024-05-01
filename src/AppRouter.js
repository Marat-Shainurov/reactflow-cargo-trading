import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ReactFlowPage from './ReactFlowPage';
import MapPage from './MapPage';

function AppRouter() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Flow</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ReactFlowPage />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
