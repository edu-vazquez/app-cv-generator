const PersonalDetails = ({
    personalData: {name, phoneNumber, email, location, github, linkedIn}
}) => {
  return (
    <div className="personalData-container">
      <h1>{name}</h1>
      <div className="personalData-contact">
          <p>{phoneNumber}</p>
          <p>{email}</p>
          <p>{location}</p>
      </div>
      <div className="personalData-links">
        <div className="link-wrapper">
            <img className='icon' src="/githubIcon.svg" alt="" />
            <p>{github}</p>
        </div>
        <div className="link-wrapper">
            <img className="icon" src="/linkedinIcon.svg" alt="" />
            <p>{linkedIn}</p>
        </div>
      </div>
    </div>
  )
}

export default PersonalDetails
