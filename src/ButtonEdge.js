import getInitialNodes from 'helpers/getInitialNodes';
import getNewId from 'helpers/getNewId';
import React, { useCallback, useState } from 'react';
import { getBezierPath, getEdgeCenter, getMarkerEnd, useNodesState, useReactFlow } from 'react-flow-renderer';

import './index.css';

const foreignObjectSize = 40;

// const onEdgeClick = (evt, setNodes) => {
//   evt.stopPropagation();
//     const id = getNewId();
//     const newNode = {
//       id,
//       position: {x: 0, y: 0,},
//       data: {label: `Node ${id}`,},
//     };
//     setNodes((nds) => nds.concat(newNode));
// };

export default function EdgeButton({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) {
  const edgePath = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const [edgeCenterX, edgeCenterY] = getEdgeCenter({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  const reactFlowInstance = useReactFlow();

  const onEdgeClick = useCallback((evt) => {
    //evt.preventDefault();
    evt.stopPropagation();

    const newNode = {
      id: getNewId(),
      position: { x: Math.random() * 50, y: Math.random() * 50 },
      data: { label: `Node ${id}`, },
    };
    reactFlowInstance.addNodes(newNode);
  },
    []
  );


  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      <foreignObject
        width={foreignObjectSize}
        height={foreignObjectSize}
        x={edgeCenterX - foreignObjectSize / 2}
        y={edgeCenterY - foreignObjectSize / 2}
        className="edgebutton-foreignobject"
      //requiredExtensions="http://www.w3.org/1999/xhtml"
      >
        <div>
          <button className="edgebutton" onClick={(event) => onEdgeClick(event, id, )}>
            +
          </button>
        </div>
      </foreignObject>
    </>
  );
}
