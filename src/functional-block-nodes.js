import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

export default memo(({ data }) => {
  return (
    <div
      style={{
        width: 130,
        height: 15, 
        backgroundColor: '#87CEFA',
        border: '1px solid black',
        borderRadius: 10,
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Handle type="target" position={Position.Left} style={{ background: '#555' }} id="a"/>
      <Handle type="target" position={Position.Top} style={{ background: '#555' }} id="b"/>
      <Handle type="target" position={Position.Bottom} style={{ background: '#555' }} id="c"/>
      <div style={{ fontSize: '11px' }}>
        <strong>{ data.label }</strong>
      </div>
      <Handle type="source" position={Position.Right} style={{ background: '#555' }} />
    </div>
  );
});
