import React, { useState } from 'react'
import avatar from './avatar.avif'

const PreviewEdit = () => {
    const [Firstname, setFirstname] = useState("");
        const [Lastname, setLastname] = useState("");
        const [email, setEmail] = useState("");
        const [numberphone, setNumberphone] = useState("");
        const [description, setDescription] = useState("");
        const [adress, setAdress] = useState("");
        const [aboutus, setAboutus] = useState("");
        const [datedebut, setDatadebut] = useState("");

  return (
              <div className='emplacment_preview'>
          <div className="cv-container">
  <div className="left-column">
      <img className='avatarr' src={avatar}/>
    <div className="section">
    </div>
    <div className="section">
      <h2>À PROPOS</h2>
      <p>
        <strong>
            {/* {aboutus} */}
            </strong> 
        </p>
    </div>
    <div className="section">
      <h2>COMPÉTENCES</h2>
      <ul className="skills">
        <li>
          <i className="icon fas fa-check-circle text-darkblue" />{" "}
          <strong>
            {/* {competance} */}
            </strong>
          <i className="icon fas fa-check-circle text-darkblue" />{" "}
          <strong>
            {/* {niveau} */}
            </strong>
        </li>
      </ul>
    </div>
    <div className="section">
      <h2>Langues</h2>
      <p>
        {/* {langue} */}
      </p>
    </div>
    <div className="section">
      <h2>profile</h2>
      <p>
        {/* {profile} */}
      </p>
    </div>
  </div>
  <div className="right-column">
    <div className="header">
      <h1>
          {Firstname}  <span className="text-blue text-uppercase">{Lastname}</span>
      </h1>
      <p></p>
      <ul className="infos">
        <li>
          <i className="icon fas fa-at text-blue" />{" "}
          <a >{email}</a>
        </li>
        <li>
          <i className="icon fas fa-phone text-blue" /> {numberphone}
        </li>
        <li>
          <i className="icon fas fa-map-marker-alt text-blue" /> {adress}
        </li>
      </ul>
    </div>
    <div className="content">
      <div className="section">
        <h2>
          Expériences <br />
          <span className="text-blue">professionelles</span>
        </h2>
        <p>
        {/* {Post} */}
        <br/>
          <strong>
          {/* {Employeur} */}
           <i className="fas fa-long-arrow-alt-right" /> 
          </strong>
          
        </p>
        <ul className="experience-list">
        {/* {ville} */}
          <li>
          <p>
        
      </p>
          </li>
        </ul>
      </div>
      <div className="section">
        <p>
        
        </p>
        <ul className="experience-list">
          <li></li>
        </ul>
      </div>
      <div className="section">
        <h2>
          FORMATION <br />
          <span className="text-blue"></span>
        </h2>
        <p>
          <strong>
            {datedebut} 
            <i className="fas fa-long-arrow-alt-right" /> 
            {/* {datafin} */}
          </strong>
          <br />
          {/* <em>{formation}</em>, {etablisment}, {ville} */}
        </p>
       
      </div>
      <div className="section">
        <h2>
          <span className="text-blue">expériences</span>
        </h2>
        <p>
experience
        </p>
      </div>
    </div>
  </div>
</div>

          </div>
  )
}

export default PreviewEdit