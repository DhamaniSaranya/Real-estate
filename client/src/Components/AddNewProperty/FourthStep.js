import React from 'react';
import '../../CSS/form.css';

function FourthStep({formData, setFormData}) {
  return (
    <div className='containter'>
{/* ////////////////////////////////////////////////// */}
      <div className="left">
        <div className="input-field">
          <label>Email</label>
          <input 
            type="email"
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={(event) => setFormData({...formData, email: event.target.value})}
          />
        </div>

        <div className="input-field">
          <label>Area</label>
          <input 
            type="text"
            placeholder='Area'
          />
        </div>

        <div className="input-field">
          <label>Address</label>
          <input 
            type="text"
            placeholder='Address'
          />
        </div>

        <div className="input-field">
          <label>Latitude</label>
          <input 
            type="text"
            placeholder='Latitude'
          />
        </div>

      </div>

{/* /////////////////////////////////////////////////// */}
      <div className="right">
        <div className="input-field">
          <label>City</label>
          <input 
            type="text"
            placeholder='City'
          />
        </div>

        <div className="input-field">
          <label>Pincode</label>
          <input 
            type="text"
            placeholder='Pincode'
          />
        </div>

        <div className="input-field">
          <label>Landmark</label>
          <input 
            type="text"
            placeholder='Landmark'
          />
        </div>

        <div className="input-field">
          <label>Longitude</label>
          <input 
            type="text"
            placeholder='Longitude'
          />
        </div>

      </div>
    </div>
  )
}

export default FourthStep