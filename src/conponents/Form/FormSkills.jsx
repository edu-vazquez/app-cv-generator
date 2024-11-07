import React from 'react'

const FormSkills = ({ content, setContent }) => {

  const {programmingLanguages, technologies} = content.skills;

  const handleChangeSkills = (e) => {

    const {value, name, id} = e.target;

    const [idName, index] = id.split("-")

    setContent((oldContent) => {
      const updatedProgrammingLanguages = [...oldContent.skills.programmingLanguages];
      updatedProgrammingLanguages[index] = value;
  
      return {
        ...oldContent,
        skills: {
          ...oldContent.skills,
          programmingLanguages: updatedProgrammingLanguages,
        },
      };
    });

  }

  const handleAddSkills = (itemName) => {
    setContent((oldContent) => {
      const updatedSkillsArray = [...oldContent.skills[itemName]];
      updatedSkillsArray.push("New"); 

      return {
        ...oldContent,
        skills: {
          ...oldContent.skills,
          [itemName]: updatedSkillsArray, 
        },
      };
    });
  };

  const handleRemoveSkills = (itemName) => {
    setContent((oldContent) => {
      const updatedSkillsArray = [...oldContent.skills[itemName]];
      updatedSkillsArray.pop(); 

      return {
        ...oldContent,
        skills: {
          ...oldContent.skills,
          [itemName]: updatedSkillsArray, 
        },
      };
    });
  };

  return (
    <div className="form-wrapper">
        <div className='form-main-section'>
          <div className="form-title">
            <h2 className='form-title'>
              Skills
            </h2>  
            <img src="/puzzle.svg" alt="" />
          </div>

          <div className='form-section'>
            <h2 
              htmlFor="fullName"
              className='form-skill-subtitle'
            >
              Programming Languajes
            </h2>
            {
              programmingLanguages.map(
                (item, i) => {
                  return (

                      <input 
                        type="text"
                        name="programmingLanguajes"
                        id={`pl-${i}`}
                        key={`pl-${i}`}
                        defaultValue={item}
                        onChange={handleChangeSkills}
                      />
                  )
                }
              )
            }
            <div 
              className='form-add-remove'
            >
              <button
                className='button-add-experience'
                onClick={() => handleAddSkills("programmingLanguages")}
              >
                ADD
              </button>
              <button
                className='button-add-experience'
                onClick={() => handleRemoveSkills("programmingLanguages")}
                
              >
                REMOVE 
              </button>
            </div>

            <h2 
              htmlFor="fullName"
              className='form-skill-subtitle'
            >
              Technologies
            </h2>
            {
              technologies.map(
                (item, i) => {
                  return (
                    <input 
                      type="text" name="technologies"
                      id={`tec-${i}`}
                      key={`tec-${i}`}
                      defaultValue={item} 
                      onChange={handleChangeSkills}
                    />
                  )
                }
              )
            }
            <div 
              className='form-add-remove'
            >
              <button
                className='button-add-experience'
                onClick={() => handleAddSkills("technologies")}
                
              >
                ADD
              </button>
              <button
                className='button-add-experience'
                onClick={() => handleRemoveSkills("technologies")}
                
              >
                REMOVE
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FormSkills
