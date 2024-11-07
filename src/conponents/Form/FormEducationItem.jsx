import { useState } from 'react'

const FormEducationItem = ({ education, index, handleChangeEducation }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisivility = () => {
      setIsVisible(!isVisible);
    }
    return (
        <div className='experienceItem-container'>
            <div className="form-experience-title">
                <p>{education.degree}</p>
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
                htmlFor="degree"
                >
                    Degree
                </label>
                <input 
                    type="text"
                    name={`${index}-degree`}
                    id={`${index}-degree`}
                    className='form-imput'
                    defaultValue={education.degree}
                    onChange={handleChangeEducation}
                />

                <label 
                htmlFor="institution"
                >
                    Institution
                </label>
                <input 
                    type="text"
                    name={`${index}-institution`}
                    id={`${index}-institution`}
                    className='form-imput'
                    defaultValue={education.institution}
                    onChange={handleChangeEducation}
                />

                <label 
                    htmlFor="institution"
                >
                    Location
                </label>
                <input 
                    type="text"
                    name={`${index}-location`}
                    id={`${index}-location`}
                    className='form-imput'
                    defaultValue={education.location}
                    onChange={handleChangeEducation}
                />

                <label 
                    htmlFor="institution"
                >
                    Start Date
                </label>
                <input 
                    type="text"
                    name={`${index}-startDate`}
                    id={`${index}-startDate`}
                    className='form-imput'
                    defaultValue={education.startDate}
                    onChange={handleChangeEducation}
                />

                <label 
                    htmlFor="institution"
                >
                    End Date
                </label>
                <input 
                    type="text"
                    name={`${index}-endDate`}
                    id={`${index}-endDate`}
                    className='form-imput'
                    defaultValue={education.endDate}
                    onChange={handleChangeEducation}
                />

                <div className='form-experience-duties'>
                    {
                        education.additionalInformation.map(
                        (item, id) => {
                            return (
                                <div key={id}>
                                    <p>Additional Information: {id + 1}</p>
                                    <textarea
                                    name={`${index}-additionalInformation-${id}`}
                                    id={`${index}-additionalInformation-${id}`}
                                    defaultValue={item}
                                    onChange={handleChangeEducation} 
                                    />
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </div>
  )
}

export default FormEducationItem


