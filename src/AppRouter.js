import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import ReactFlowPage from './ReactFlowPage';

function AppRouter() {
  return (
    <div style={{ marginLeft: '10px'}}>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0}}>
          <li>
            <Link to="/map" style={{ textDecoration: 'none', padding: '10px 20px', backgroundColor: '#87CEFA', color: 'white', borderRadius: '5px', border: 'none' }}>Карта</Link>
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
