import React from 'react'
import './cvstyle.css'

const CvCard = ({cv}) => {
  return (
            <div className="cvv-containerr">
    <div className="leftt-columnn">
      <img src={cv.avatar}/>
      <div className="sections">
        <h2>À PROPOS</h2>
        <p>
          <strong>{cv.aboutus}</strong> 
          </p>
      </div>
   
      <div className="sections">
        <h2>Langues</h2>
        <p>
         {cv.langue}
      </p>
          {cv.niveau}
      </div>
      <div className="section">
      <h2>profile</h2>
      <p>
        {cv.profile}
      </p>
    </div>
    </div>
    <div className="rightt-columnn">
      <div className="headerr">
        <h1>
            {cv.Firstname}  <span className="text-blue text-uppercase">{cv.Lastname}</span>
        </h1>
        <p></p>
        <ul className="infoss">
          <li>
            <i className="icon fas fa-at text-blue" />{" "}
            <a href="mailto:contact@pgomba.com">{cv.email}</a>
          </li>
          <li>
            <i className="icon fas fa-phone text-blue" /> {cv.numberphone}
          </li>
          <li>
            <i className="icon fas fa-map-marker-alt text-blue" /> {cv.adress}
          </li>
        </ul>
      </div>
      <div className="contentt">
        <div className="sections">
          <h2>
            Expériences <br />
            <span className="text-blue">professionelles</span>
          </h2>
          <p>
          {cv.certificat}
          <br/>
            <strong>
            {cv.datedebcertif},
          {cv.datefincertif}
            </strong>
            {cv.descriptioncertficat}
          </p>
        </div>
      
        <div className="sections">
          <h2>
            FORMATION <br />
            <span className="text-blue">
              {cv.formation}
            </span>
          
        </h2>
        <p>
          <strong>
            {cv.datedebut} <i className="fas fa-long-arrow-alt-right" /> {cv.datafin}
          </strong>
          <br />
          <em>{cv.etablisment}, {cv.ville}</em> 
          {cv.descripcertif}
        </p>
        
        </div>
         <div className="sections">
        <h2>COMPÉTENCES</h2>
        <ul className="skillss">
          <li>
            <i className="icon fas fa-check-circle text-darkblue" />{" "}
            <strong>{cv.competance}</strong>
            <i className="icon fas fa-check-circle text-darkblue" />{" "}
             {cv.rating}
          </li>
        </ul>
      </div>
      </div>
    </div>
    </div> 
  )
}

export default CvCard