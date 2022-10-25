import React from 'react';
import '../../CSS/form.css';

function ThirdStep({formData, setFormData}) {
  return (
    <div className='containter'>
      <div className="left">

        <div className="input-field">
          <label>Name</label>
          <input 
            type="text"
            placeholder='Owner'
          />
        </div>

        <div className="input-field">
          <label>Posted by</label>
          <input 
            type="text"
            placeholder='Posted by'
          />
        </div>

        <div className="input-field">
          <label>Featured Package</label>
          <select>
            <option value="0">Select Pacakge</option>
            <option value="1">Premium</option>
            <option value="2">Gold</option>
          </select>
        </div>

      </div>

      <div className="right">
        <div className="input-field">
          <label>Mobile</label>
          <input 
            type="text" 
            placeholder='Enter mobile no.'
            value={formData.mobile}
            onChange={(event) => setFormData({...formData, mobile: event.target.value})}
          />
        </div>

        <div className="input-field">
          <label>Sale Type</label>
          <select>
            <option value="0">Please Select</option>
            <option value="1">Premium</option>
            <option value="2">Gold</option>
          </select>
        </div>

        <div className="input-field">
          <label>PPD Package</label>
          <select>
            <option value="0">Select Package</option>
            <option value="1">Premium</option>
            <option value="2">Gold</option>
          </select>
        </div>

      </div>
    </div>
  )
}

export default ThirdStep