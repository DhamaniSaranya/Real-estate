import React from 'react';
import "../../CSS/addPropHeader.css";



const Progress = () => {
  return (
    <>
    <div>
      <div>
        <h1 className='add-header'>ADD NEW PROPERTY</h1>
      </div>
      <div className="steps">
        <div id="step" >
          <div className='num'>1</div>
          <div className='st' >Basic Info</div>
        </div>
        <div id="step" >
          <div className='num'>2</div>  
          <div className='st'>Property Details</div>
        </div>
        <div id="step" >
          <div className='num'>3</div>
          <div className='st'>General Info</div>
        </div>
        <div id="step" >
          <div className='num'>4</div>
          <div className='st'>Location Info</div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Progress;