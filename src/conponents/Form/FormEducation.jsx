import FormEducationItem from "./FormEducationItem";

const FormEducation = ({ content, setContent }) => {

  const handleAddEducation = () => {
    const newEducation = [...education];

    newEducation.push(
      setContent((oldContent) => {
        const updatedEducation = [...oldContent.education];

        updatedEducation.push(
        {
          institution: 'New Institution',
          degree: 'New Degree',
          startDate: '01/2020',
          endDate: '01/2020',
          location: 'Location',
          additionalInformation: ['Adicional Information']
        })

        return {
        ...oldContent,
        education: updatedEducation,
        };
      }))
  }
  const handleRemoveEducation = () => {
    setContent((oldContent) => {
      const updatedEducation = [...oldContent.education];

      updatedEducation.pop();

      return {
      ...oldContent,
      education: updatedEducation,
      };
    });
  }
  const handleChangeEducation = (e) => {
    const {value, name} = e.target;
    
    const [index, fieldName, additionalIndex] = name.split("-");

    setContent((oldContent) => {
      const updatedEducation = [...oldContent.education];
      
      if (additionalIndex){
        const updatedAdditionalInfo = [...updatedEducation[index].additionalInformation];
        updatedAdditionalInfo[additionalIndex] = value;

        updatedEducation[index] = {
          ...updatedEducation[index], additionalInformation: updatedAdditionalInfo,
        }
      } else {
        updatedEducation[index] = {
          ...updatedEducation[index],
          [fieldName]: value,
        };
      }

      return {
        ...oldContent,
        education: updatedEducation,
      };
    });
  }


  const { education } = content;
  return (
    <div className="form-wrapper">
        <div className='form-main-section'>
          <div className="form-title">
              <h2 className='form-title'>
                Education
              </h2>  
              <img src="/book.svg" alt="" />
          </div>

          {
            education.map((item, index) => {
              return (
                <FormEducationItem 
                  education={item}
                  key={`education-${index}`}
                  index={index}
                  handleChangeEducation={handleChangeEducation}
                />
              )
            })
          }
          <div className='form-add-remove'>
            <button
              className='button-add-experience'
              onClick={handleAddEducation}
            >
              ADD
            </button>
            <button
              className='button-add-experience'
              onClick={handleRemoveEducation}
            >
              REMOVE
            </button>
          </div>
        </div>

    </div>
  )
}

export default FormEducation
