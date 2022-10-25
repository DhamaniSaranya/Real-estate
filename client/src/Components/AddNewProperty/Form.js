import React, { useState } from 'react';
import axios from 'axios';
import Firststep from './FirstStep';
import Secondstep from './SecondStep';
import Thirdstep from './ThirdStep';
import Fourthstep from './FourthStep';
// import { Link } from "react-router-dom";
import Header from './Header';

import '../../CSS/form.css';

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    property: "",
    mobile: "",
    area: "",
    email: ""
  })

  const FormTitles = ["Basic Info", "Property Details", "General Info", "Location Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Firststep formData={formData} setFormData={setFormData}/>
    } else if (page === 1) {
      return <Secondstep formData={formData} setFormData={setFormData}/>
    } else if (page === 2) {
      return <Thirdstep formData={formData} setFormData={setFormData}/>
    } else {
      return <Fourthstep formData={formData} setFormData={setFormData}/>
    }
  }

  return (
    <>
      <div className='pbar'> <Header/> </div>
      <div className='form'>
        <div className="form-containter">
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button 
              className='prev'
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);  
              }}
            >Previous</button>

            <button 
              className='next'
              onClick={() => {
                if (page === FormTitles.length-1) {
                  alert('Form Submitted')
                  // console.log(formData)
  ////////////////////////////////////////////////////
                  axios({
                    method: "post",
                    url: "http://localhost:5000/addproperty",
                    data: formData
                  })
  //////////////////////////////////////////////////////
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length-1 ? "Add Property" : "Save & Continue"}
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Form