import React from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import ReactFlowPage from './ReactFlowPage';
import MapPage from './MapPage';

function AppRouter() {
  const location = useLocation();

  return (
    <div style={{ marginLeft: '10px' }}>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
          <li>
            <Link to="/" style={{ textDecoration: 'none', padding: '5px 20px', backgroundColor: location.pathname === '/' ? '#87CEFA' : 'transparent', color: location.pathname === '/' ? 'white' : '#333', borderRadius: '5px 5px 0 0', border: '1px solid #ccc', borderBottom: 'none', borderTopRightRadius: 5, borderTopLeftRadius: 5 }}>Flow</Link>
          </li>
          <li>
            <Link to="/map" style={{ textDecoration: 'none', padding: '5px 20px', backgroundColor: location.pathname === '/map' ? '#87CEFA' : 'transparent', color: location.pathname === '/map' ? 'white' : '#333', borderRadius: '5px 5px 0 0', border: '1px solid #ccc', borderBottom: 'none', borderTopRightRadius: 5, borderTopLeftRadius: 5 }}>Map</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<ReactFlowPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
