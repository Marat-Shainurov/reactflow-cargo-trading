import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(({ data }) => {
  return (
    <div
      style={{
        width: 80,
        height: 40, 
        backgroundColor: '#D8BFD8',
        border: '1px solid black',
        borderRadius: 50,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold'
      }}
    >
      <Handle type="source" position={Position.Top} style={{ background: '#555' }} />
      <div style={{ fontSize: '11px' }}>
        <strong>{ data.label }</strong>
      </div>
    </div>
  );
});
