import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(({ data }) => {
  return (
    <div
      style={{
        width: 20,
        height: 20, 
        backgroundColor: '#fff',
        border: '1px solid black',
        borderRadius: 7,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Handle type="target" position={Position.Bottom} style={{ background: '#555' }} />
      <div style={{ fontSize: '11px', textAlign: 'center' }}>
        <strong style={{ display: 'block', lineHeight: '16px' }}>{ data.docs_count }</strong>
      </div>
      <Handle type="source" position={Position.Top} style={{ background: '#555' }} />
    </div>
  );
});
