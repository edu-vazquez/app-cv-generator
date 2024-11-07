const PreviewExperience = ({ experience }) => {
  return (
    <div className='experience-container'>
      <h2 className='section-title'>experience</h2>
      {
        experience.map((experience, id) => {
          return (
            <div key={id}>
              <div className='line bold'>
                <p>{experience.role}</p>
                <p>{experience.startDate} - {experience.endDate}</p>
              </div>

              <div className='line'>
                <p>{experience.company}</p>
                <p>{experience.location}</p>
              </div>
              <div className="duties">
                {
                  experience.duties.map(
                    (dutie, id2) => {
                      return <p key={id2}>{dutie}</p>
                    }
                  )
                }
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

export default PreviewExperience
