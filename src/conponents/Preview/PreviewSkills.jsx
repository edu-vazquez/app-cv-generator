const Skills = ({ skills: {programmingLanguages, technologies}}) => {
  return (
    <div className='skills-container'>
        <h2 className="section-title">
            skills
        </h2>
        <p className="skills-line bold">Programming Languages</p>
        <div className='skills-content'>
            {
                programmingLanguages.map((item, id) => {
                    return (
                        <p key={id}>
                            {item}
                        </p>
                    )
                })
            }
        </div>
        <p className="skills-line bold">Technologies</p>
        <div className="skills-content">
        {
                technologies.map((item, id) => {
                    return (
                        <p key={id}>
                            {item}
                        </p>
                    )
                })
            }           
        </div>
        
    </div>
  )
}

export default Skills