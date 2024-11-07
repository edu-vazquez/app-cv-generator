import FormExperienceItem from './FormExperienceItem';

const FormExperience = ({ content, setContent }) => {

    const { experience } = content;

    const handleExperienceChange = (e) => {
        const {value, name} = e.target;
    
        const [index, fieldName, dutyIndex] = name.split("-");
    
        setContent((oldContent) => {
          const updatedExperience = [...oldContent.experience];
          updatedExperience[index] = {
            ...updatedExperience[index],
            [fieldName]: value,
          };
    
          if (dutyIndex){
            const updatedDuties = [...updatedExperience[index].duties];
          
            updatedDuties[dutyIndex] = value;
            
            updatedExperience[index] = {
              ...updatedExperience[index],
              duties: updatedDuties
            };
          }
    
          return {
            ...oldContent,
            experience: updatedExperience,
          };
        });
      }
    
    const handleAddExperience = () => {
        setContent((oldContent) => {
            const updatedExperience = [...oldContent.experience];

            updatedExperience.push(
            {
                id: `ex-${content.experience.lenght}`,
                company: 'New Company',
                role: 'New Role',
                startDate: '01/2000',
                endDate: '01/2000',
                location: 'New Location',
                duties: [
                'New Duty',
                'New Duty'
                ]
            },
            )

            return {
            ...oldContent,
            experience: updatedExperience,
            };
        });
    }
    
    const handleDeleteExperience = () => {
        setContent((oldContent) => {
            const updatedExperience = [...oldContent.experience];

            updatedExperience.pop();

            return {
            ...oldContent,
            experience: updatedExperience,
            };
        });
    }
      
    const handleAddDuty = (index) => {
    
        setContent((oldContent) => {
            const updatedExperience = [...oldContent.experience];

            if (updatedExperience[index]) {
            updatedExperience[index] = {
                ...updatedExperience[index],
                duties: [...updatedExperience[index].duties, 'New Duty']
            };
            }

            return {
            ...oldContent,
            experience: updatedExperience,
            };
        });
    }

    const handleRemoveDuty = (index) => {

    setContent((oldContent) => {
        const updatedExperience = [...oldContent.experience];

        if (updatedExperience[index].duties.length > 0) {
        updatedExperience[index] = {
            ...updatedExperience[index],
            duties: updatedExperience[index].duties.slice(0, -1),
        };
        }

        return {
        ...oldContent,
        experience: updatedExperience,
        };
    });
    }
    
  return (
    <div className="form-wrapper">
        <div className='form-main-section'>
          <div className="form-title">
            <h2 className='form-title'>
              Experience
            </h2>  
            <img src="/work.svg" alt="" />
          </div>
          {
            experience.map((item, i) => {
              return (
                <FormExperienceItem 
                  experience={item}
                  handleExperienceChange={handleExperienceChange}
                  handleAddDuty={handleAddDuty}
                  handleRemoveDuty={handleRemoveDuty}
                  index={i}
                  key={`exp-${i}`}
                />
              )          
            })
          }
          <div className='form-add-remove'>
          <button
            className='button-add-experience'
            onClick={handleAddExperience}
          >
            ADD
          </button>
          <button
            className='button-add-experience'
            onClick={handleDeleteExperience}
          >
            REMOVE
          </button>
          </div>

        </div>
      </div>
  )
}

export default FormExperience
