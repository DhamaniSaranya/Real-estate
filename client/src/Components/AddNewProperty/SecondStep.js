import React from 'react';
import '../../CSS/form.css';

function Secondstep({formData, setFormData}) {
  return (
    <div className='containter'>

{/* ////////////////////////////////////////////////// */}
      <div className="left">
        <div className='input-field'>
          <label>Length</label>
          <input 
            type="text" 
            placeholder='Example: 1000'
          />
        </div>

        <div className="input-field">
          <label>Total Area</label>
          <input 
            type="text"
            placeholder='Example: 1000'
            value={formData.area}
            onChange={(event) => setFormData({...formData, area: event.target.value})}
          />
        </div>

        <div className="input-field">
          <label>No of BHK</label>
          <select>
            <option value="0">Select No of BHK</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <div className="input-field">
          <label>Attached</label>
          <select>
            <option value="0">Select Attached</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
        </div>

        <div className="input-field">
          <label>Furnished</label>
          <select>
            <option value="0">Select Furnished</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
        </div>

        <div className="input-field">
          <label>Lift</label>
          <select>
            <option value="0">Select Lift</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
        </div>

        <div className="input-field">
          <label>Facing</label>
          <select>
            <option value="0">Select Facing</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
        </div>
      </div>

{/* /////////////////////////////////////////////////// */}
      <div className="right">
        <div className='input-field'>
          <label>Breath</label>
          <input 
            type="text" 
            placeholder='Example: 1000'
          />
        </div>

        <div className="input-field">
          <label>Area Unit</label>
          <select>
            <option value="0">Area Unit</option>
            <option value="1">Feet</option>
            <option value="2">Inch</option>
          </select>
        </div>

        <div className="input-field">
          <label>No of Floor</label>
          <select>
            <option value="0">Select no if Floors</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>

        <div className="input-field">
          <label>Western Toilet</label>
          <select>
            <option value="0">Select Western Toilet</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
        </div>

        <div className="input-field">
          <label>Car Parking</label>
          <select>
            <option value="0">Select Car Parking</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
        </div>

        <div className="input-field">
          <label>Electricity</label>
          <select>
            <option value="0">Select Electricity</option>
            <option value="1">1 Phase</option>
            <option value="2">2 Phase</option>
            <option value="3">3 Phase</option>
          </select>
        </div>
      </div>

    </div>
  )
}

export default Secondstep