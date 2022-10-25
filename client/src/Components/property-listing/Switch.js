import React from 'react';
// import './Switch.css'
// import './toggleButton.css'
const Switch = ({ selected, toggleSelected }) => {
  return (
    <>
      <div className="toggle-container" onClick={toggleSelected}>
        <div className={`dialog-button ${selected ? "" : "disabled"}`}>
          {selected ? "sold" : "unsold"}
        </div>
      </div>
    </>
  );
};
export default Switch;