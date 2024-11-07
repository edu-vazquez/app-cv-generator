import './preview.css';
import PreviewEducation from './PreviewEducation';
import PreviewPersonalDetails from './PreviewPersonalDetails';
import PreviewSkills from './PreviewSkills';
import PreviewExperience from './PreviewExperience';

const Preview = ({content}) => {

  const {personalData, experience, education, skills} = content;

  return (
    <div className='preview-container'>
      <div className="preview-a4">
        <PreviewPersonalDetails personalData={personalData}/>
        <PreviewExperience experience={experience}/>
        <PreviewEducation education={education}/>
        <PreviewSkills skills={skills}/>
      </div>
    </div>
  )
}

export default Preview
