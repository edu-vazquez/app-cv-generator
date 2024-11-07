import './App.css'
import Preview from './conponents/Preview/Preview'
import Form from './conponents/Form/Form'
import { useState } from 'react';

function App() {
  const contentDefault = {
    personalData: {
      name: 'Carlos Sánchez',
      phoneNumber: '+44 123456789',
      email: 'carlos.sanchez@example.com',
      location: 'Madrid, Spain',
      github: 'github.com/carloss',
      linkedIn: 'linkedin.com/in/carlossanchez'
    },
    experience: [
      {
        id: 'ex-0',
        company: 'Tech Innovations Inc.',
        role: 'Frontend Developer',
        startDate: '02/2019',
        endDate: '08/2021',
        location: 'Madrid',
        duties: [
          'Developed responsive UI components, increasing user engagement by 25%',
          'Collaborated with the design team to create a modernized application layout'
        ]
      },
      {
        id: 'ex-1',
        company: 'Global Solutions Ltd.',
        role: 'Software Engineer',
        startDate: '09/2021',
        endDate: 'Present',
        location: 'Remote',
        duties: [
          "Implemented API integrations that reduced data processing time by 40%",
          "Enhanced application security by introducing authentication protocols"
        ]
      }
    ],
    education: [
      {
        institution: 'Polytechnic University of Madrid',
        degree: 'Bachelor of Engineering in Computer Science',
        startDate: '09/2015',
        endDate: '06/2019',
        location: 'Madrid, Spain',
        additionalInformation: ['GPA: 3.7/4.0']
      }
    ],
    skills: {
      programmingLanguages: [
        'Python',
        'Ruby',
        'Go'
      ],
      technologies: [
        'Docker',
        'Kubernetes',
        'Vue.js',
        'Bootstrap'
      ]
    }
  };  

  const [content, setContent] = useState({...contentDefault});

  const [isEditing, setIsEditing] = useState(false);
  const handleEdit = () => {
    setIsEditing(!isEditing);
  }

  return (
    <div className='app'>
      <Form 
        content={content} 
        setContent={setContent} 
        handleEdit={handleEdit}  
        isEditing={isEditing} 
        setIsEditing={setIsEditing}/>
      <Preview content={content}/>
    </div>
  )
}

export default App
