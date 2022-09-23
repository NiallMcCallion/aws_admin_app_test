import React from 'react';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.setData("text/plain", event.target.id);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside style={{ "backgroundColor": "lightgrey" }}>
      <div className="description">You can drag these into a page.</div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Textbox
      </div>
      <div className="dndnode" onDragStart={(event) => onDragStart(event, 'default')} draggable>
        Date
      </div>
      {/* <div className="dndnode" onDragStart={(event) => onDragStart(event, 'standardpage')} draggable>
        Page
      </div> */}
    </aside>
  );
};
