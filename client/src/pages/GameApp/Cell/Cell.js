import React from 'react';
import './Cell.css';

const Cell = ({color, size}) => {
  let classString = "cell-" + size + " " + color;
  return (
    <div className={classString}>
    
      {/* <h3>TEST CELL.JS</h3> */}
    
    </div>
  );
}

export default Cell;