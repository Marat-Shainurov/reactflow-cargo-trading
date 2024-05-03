import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';


export default memo(({ data }) => {
  return (
    <div
      style={{
        width: 20,
        height: 300, 
        backgroundColor: '#f2f2f2',
        border: '1px solid black',
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: '300px'
      }}
    >
      <div style={{ fontSize: '11px' }}>
        <strong>{ data.label }</strong>
      </div>
      <Handle type="source" position={Position.Right} style={{ background: '#555' }} />
    </div>
  );
});
