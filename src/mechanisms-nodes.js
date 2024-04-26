import React, { memo } from 'react';

export default memo(({ data }) => {
  return (
    <div
      style={{
        width: 1200,
        height: 15, 
        backgroundColor: '#f2f2f2',
        border: '1px solid black',
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '11px' }}>
        <strong>{ data.label }</strong>
      </div>
    </div>
  );
});
