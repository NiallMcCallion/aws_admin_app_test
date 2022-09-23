import getInitialNodes from 'helpers/getInitialNodes';
import getNewId from 'helpers/getNewId';
import React, { useCallback, useState } from 'react';
import { getBezierPath, getEdgeCenter, getMarkerEnd, Handle, useNodesState, useReactFlow } from 'react-flow-renderer';
import { Link } from 'react-router-dom';

const foreignObjectSize = 40;

export default function StandardPage({ markerEnd, data, isConnectable }) {

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    console.log(event.target.id);
    let targetBox=document.getElementById(event.target.id);
    targetBox.style.background="#ccc";
  }, []);

  const onDrop = useCallback((event) => {
    let targetBox=document.getElementById(event.target.id);
    targetBox.style.background="000";
    const dataId = event.dataTransfer.getData("text/plain");
    targetBox.appendChild(document.getElementById(dataId));
  }, []);

  return (
    <>
      <Handle
        type="target"
        position="left"
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div style={
        {
          "background": "#fff",
          "border": "1px solid #1a192b",
          "borderRadius": "3px",
          "color": "#222",
          "fontSize": "12px",
          "padding": "10px",
          "textAlign": "center",
          "width": "300px"
        }}>

        <div className='form-group'>
          <label className='form-label-bold'>Page title</label>
          <br/>
          <input defaultValue={data.id}></input>
        </div>

        <div style={{ "border": "1px dotted black" }} className="form-group" onDragOver={onDragOver} onDrop={onDrop} id={data.id}>
          <br/>
        </div>

        <Link to="/TestPage">
          <button className='btn btn-secondary'>Edit page</button>
        </Link>

      </div>
      {/* <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: 10, background: '#555' }}
        isConnectable={isConnectable}
      /> */}
      <Handle
        type="source"
        position="right"
        id="b"
        // style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
}
