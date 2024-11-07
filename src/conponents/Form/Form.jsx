import { useState } from 'react';
import FormEducation from './FormEducation';
import FormExperience from './FormExperience';
import FormSkills from './FormSkills';
import './form.css';

const Form = ({content, setContent, isEditing, setIsEditing, handleEdit}) => {

  const { personalData } = content;

  const handlePersonalDetailsChange = (e) => {
    const {value, name} = e.target;

    setContent((oldContent) => ({
      ...oldContent,
      personalData:{
        ...oldContent.personalData,
        [name]: value
      }
    }))
  }

  return (
    <div className={`form-container ${isEditing ? 'isEditing' : 'isNotEditing' }`}
    >
      <div className='movil edit-menu'>
        <button
          onClick={handleEdit}
        >
          {isEditing ? "Finish Editing" : "Edit"}
        </button>
      </div>

      {/* PERSONAL DETAILS */}
      <div className="form-wrapper">
        <div className='form-main-section'>
          <div className="form-title first">
            <h2 className='form-title '>Personal Details
            </h2>  
            <img src="/person.svg" alt="" />
          </div>
          <div className='form-input-container'>
            <label htmlFor="name">
              Full Name
            </label>
            <input 
              type="text" 
              name="name"
              id="name" 
              value={personalData.name}
              onChange={handlePersonalDetailsChange}
              />
          </div>

          <div className='form-input-container'>
            <label htmlFor="phoneNumber">
              Phone Number
            </label>
            <input 
              type="text" name="phoneNumber" id="phoneNumber" 
              value={personalData.phoneNumber}
              onChange={handlePersonalDetailsChange}
            />
          </div>

          <div className='form-input-container'>
            <label htmlFor="email">
              Email
            </label>
            <input 
              type='mail' 
              name="email" 
              id="email" 
              value={personalData.email}
              onChange={handlePersonalDetailsChange}
            />
          </div>

          <div className='form-input-container'>
            <label htmlFor="location">
              Location
            </label>
            <input 
              type='text' 
              name="location" id="location" 
              value={personalData.location}
              onChange={handlePersonalDetailsChange}
            />
          </div>

          <div className='form-input-container'>
            <label htmlFor="location">
              Github
            </label>
            <input 
              type='text' 
              name="github" 
              id="github" 
              value={personalData.github}
              onChange={handlePersonalDetailsChange}
            />
          </div>

          <div className='form-input-container'>
            <label htmlFor="location">
              Location
            </label>
            <input 
              type='text' 
              name="linkedIn"
              id="linkedIn" 
              value={personalData.linkedIn}
              onChange={handlePersonalDetailsChange}
            />
          </div>
        </div>
      </div>

      {/* EXPERIENCE */}
      <FormExperience 
        content={content}
        setContent={setContent}
      />

      {/* EDUCATION */}
      <FormEducation 
        content={content}
        setConte={setContent}
      />

      {/* SKILLS */}
      <FormSkills
        content={content}
        setContent={setContent}
      />
    </div>
  )
}

export default Form
