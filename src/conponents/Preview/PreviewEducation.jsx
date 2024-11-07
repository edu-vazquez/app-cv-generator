const Education = ({ education }) => {
  return (
    <div className='education-container' >
        <h2 className='section-title'>education</h2>
        {
            education.map((item, id) => {
                return (
                    <div key={id}>
                        <div className='line bold'>
                            <p>{item.degree}</p>
                            <p>{item.startDate} - {item.endDate}</p>
                        </div>
                        <div className="line">
                            <p>{item.institution}</p>
                            <p>{item.location}</p>
                        </div>
                        <div className="additional">
                        {
                            item.additionalInformation.map((item, id2) => {return (
                                <p key={`${id}-${id2}`}>
                                    {item}
                                </p>)}
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

export default Education