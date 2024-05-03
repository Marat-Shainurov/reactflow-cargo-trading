import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(({ data }) => {
  return (
    <div
      style={{
        width: 50, // Adjust the width to match the height for a rhombus shape
        height: 50, // Adjust the height to match the width for a rhombus shape
        backgroundColor: '#FFFFCC',
        border: '1px solid black',
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '11px' }}>
        <strong>{ data.label }</strong>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: '#555', marginTop: '15px' }}
      />
    </div>
  );
});
