import React from 'react';
import '../../CSS/form.css';

function Firststep({formData, setFormData}) {
  return (
    <div className='containter'>

      <div className="left">
        <div className='input-field'>
          <label>Property Type</label>
          <input 
            type="text" 
            placeholder='Enter property type'
            value={formData.property}
            onChange={(event) => setFormData({...formData, property: event.target.value})}
          />
        </div>

        <div className="input-field">
          <label>Price</label>
          <input type="text" place/>
        </div>

        <div className="input-field">
          <label>Property Age</label>
          <select name="property_age">
            <option value="0">Select Property Age</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>

        <div className="input-field">
          <label>Property Description</label>
          <input type="text"/>
        </div>
      </div>

      <div className="right">
        <div className="input-field">
          <label>Neogatable</label>
          <select name="neogatable">
            <option value="0">Select Neogatable</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
        </div>

        <div className="input-field">
          <label>Ownership</label>
          <select name="ownership">
            <option value="0">Ownership</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
        </div>

        <div className="input-field">
          <label>Property Approved</label>
          <select name="approved">
            <option value="0">Property Approved</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
        </div>

        <div className="input-field">
          <label>Bank Loan</label>
          <select name="loan">
            <option value="0">Bank Loan</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
          </select>
        </div>
      </div>

    </div>
  )
}

export default Firststep