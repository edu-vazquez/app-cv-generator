import { useState } from 'react'

const FormExperienceItem = ({ experience, handleExperienceChange, handleAddDuty, handleRemoveDuty, index }) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisivility = () => {
      setIsVisible(!isVisible);
    }
    return (
    <div className='experienceItem-container'>
      <div className="form-experience-title">
        <p>{experience.role}</p>
        <button
          onClick={toggleVisivility}
          style={{backgroundColor: 'green'}}
        >
          {isVisible ? '-' : '+'}
        </button>
      </div>

      <div 
        className="form-experience-content"
        style={{ display: isVisible ? 'block' : 'none' }}
      >
        <label 
          htmlFor="role"
        >
          Role
        </label>
        <input 
          type="text"
          name={`${index}-role`}
          id={`${index}-role`}
          className='form-imput'
          defaultValue={experience.role}
          onChange={handleExperienceChange}
        />

        <label 
          htmlFor="company"
        >
          Company
        </label>
        <input 
          type="text"
          name={`${index}-company`}
          id={`${index}-company`}
          defaultValue={experience.company}
          onChange={handleExperienceChange}
        />

        <label 
          htmlFor="endDate"
        >
          Location
        </label>
        <input 
          type="text"
          name={`${index}-location`}
          id={`${index}-location`}
          defaultValue={experience.endDate}
          onChange={handleExperienceChange}
        />

        <label 
          htmlFor="startDate"
        >
          Start Date
        </label>
        <input 
          type="text"
          name={`${index}-startDate`}
          id={`${index}-startDate`}
          defaultValue={experience.location}
          onChange={handleExperienceChange}
        />

        <label 
          htmlFor="endDate"
        >
          End Date
        </label>
        <input 
          type="text"
          name={`${index}-endDate`}
          id={`${index}-endDate`}
          defaultValue={experience.endDate}
          onChange={handleExperienceChange}
        />

        <div className='form-experience-duties'>
          {
            experience.duties.map(
              (item, id) => {
                return (
                  <div key={id}>
                    <p>Duties: {id + 1}</p>
                    <textarea
                      name={`${index}-dutie-${id}`}
                      id={`${index}-dutie-${id}`}
                      defaultValue={item} 
                      onChange={handleExperienceChange}
                    />
                  </div>

                )
              }
            )
          }
          <div className='form-add-remove'>
          <button
            className='button-add-experience'
            onClick={() => handleAddDuty(index)}
          >
              ADD
          </button>
          <button
            className='button-add-experience'
            onClick={() => handleRemoveDuty(index)}
          >
              REMOVE
          </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default FormExperienceItem