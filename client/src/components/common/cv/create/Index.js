import React, { useRef, useState } from 'react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Avatar,  FormControl, FormLabel, Input,CheckboxGroup,
  Stack,
  Checkbox, InputGroup, InputLeftAddon,Menu,Button ,
   MenuButton, Textarea, WrapItem, Box, IconButton, Slider, SliderTrack, SliderFilledTrack, SliderThumb, MenuList, MenuItem } from '@chakra-ui/react'
import {  Link, useNavigate, useParams } from 'react-router-dom'
import '../../../layout/cv/index.css'
import { useDispatch, useSelector } from 'react-redux'
import avatar from './avatar.avif'
import { add_cv } from '../../../../redux/Action/CvAction'
import { uploadFileRequest } from '../../../../redux/Action/UploadFile'


const Index = () => {
   const dispatch = useDispatch();

               //  states
    const [showForm, setShowForm] = useState(false);
        const [Firstname, setFirstname] = useState("");
        const [Lastname, setLastname] = useState("");
        const [email, setEmail] = useState("");
        const [numberphone, setNumberphone] = useState("");
        const [adress, setAdress] = useState("");
        const [aboutus, setAboutus] = useState("");
        const [datedebut, setDatadebut] = useState("");
        const [datafin, setDatafin] = useState("");
        const [formation, setFormation] = useState("");
        const [competance, setCompetance] = useState("");
        const [niveau, setNiveau] = useState("");
        const [etablisment, setEtablisment] = useState("");
        const [ville, setVille] = useState("");
        const [profile, setProflie] = useState("");
        const [langue, setLangue] = useState("");
        const [certificat, setCertificat] = useState("");
        const [descripcertif,setDescripcertif]=useState("");
        const [datefincertif,setDatefincertif]=useState("");
        const [datedebcertif,setDatedebcertif]=useState("");
  const [rating, setRating] = useState("");
  const [descriptioncertficat, setDescriptioncertficat] = useState("");


                       // add cv 
  const handleSubmit = (e) => {
  e.preventDefault();
 dispatch(add_cv({ Firstname,Lastname,email,numberphone,adress,aboutus,
datedebut,datafin,formation,competance,niveau,etablisment,ville,profile,descripcertif,datefincertif,
datedebcertif,rating,descriptioncertficat}))};

    
    let navigate = useNavigate();

                    // toggleform 
  const [showPersonalInfoForm, setShowPersonalInfoForm] = useState(false);
const [showProfileForm, setShowProfileForm] = useState(false);
const [showCompetanceForm, setShowCompetanceForm] = useState(false);
const [showLangueForm, setshowLangueForm] = useState(false);
const [showFormationForm, setshowFormationForm] = useState(false);
const [showCertificatForm, setshowCertificatForm] = useState(false);

   const handleToggleForm = (formName) => {
  if (formName === 'personalInfo') {
    setShowPersonalInfoForm(!showPersonalInfoForm);
  } else if (formName === 'profile') {
    setShowProfileForm(!showProfileForm);
  } else if (formName === 'competance') {
    setShowCompetanceForm(!showCompetanceForm);
} else if (formName === 'langue') {
    setshowLangueForm(!showLangueForm);
  } else if (formName === 'formation') {
    setshowFormationForm(!showFormationForm);
  } else if (formName === 'certificat') {
    setshowCertificatForm(!showCertificatForm);
  }
};

  const handleItemClick = (value) => {
    setNiveau(value);
  };
  const handleItemClicks = (value) => {
    setRating(value);
  };

  function handleClick() {
    navigate(-1);
  }

  // upload to image 
//   const fileState = useSelector(state => state.fileReducer.file);

// const uploading = fileState.uploading || false;
// const uploadedFile = fileState.uploadedFile || null;
// const uploadError = fileState.uploadError || null;

//   const handleFileUpload = (event) => {
//     const fileState = event.target.files[0];
//     dispatch(uploadFileRequest(fileState));
//   };
  return (
      <div className='mainn_content' style={{display:'flex'}}>
      <div className='sidebar'>
        
        {/* button to back to last page  */}
        <Button style={{
  marginTop: "0%",
  display: "flex",
  justifyContent: "flex-start",
  width: "fit-content",
 transition: "transform 0.2s ease-out",
  transform: "translateY(0)",
  ":hover": {
    transform: "translateY(-10px)",
	background:"gray"
  }
}}
 onClick={handleClick}>
      Back
    </Button>

  {/* form  */}

<form onSubmit={handleSubmit}>
        {/* personalInformation */}
       <div className='containt'>
      <Menu >
      <MenuButton color='black' as={Button} rightIcon={<ChevronDownIcon />} onClick={() => handleToggleForm('personalInfo')}>
        information personnel
      </MenuButton>
      {showPersonalInfoForm && (
      <form  className='formulaire'>
      <div style={{display:'flex'}}>
        <FormControl  >
      <FormLabel color='black'>prenom</FormLabel>
      <Input placeholder='prenom' 
      type='text'
      color='black'
      minLength="3" maxLength="8"
      value={Firstname}
      onChange={(e) => setFirstname(e.target.value)}
      />

    </FormControl>
    
    <FormControl  >
      <FormLabel color='black'>Nom</FormLabel>
      <Input placeholder='Nom' 
      type='text'
      color='black'
      minLength="3" maxLength="8"
      value={Lastname}
      onChange={(e) => setLastname(e.target.value)}
            // 
      />
    </FormControl>
    <FormControl  >
      <FormLabel color='black'>Adresse </FormLabel>
      <Input placeholder='adresse' 
      type='text'
      color='black'
      minLength="3" maxLength="8"
      value={adress}
      onChange={(e) => setAdress(e.target.value)}
          // 
      />
    </FormControl>
    </div>
    <div>
      
    <FormControl  >
      <FormLabel color='black'>email</FormLabel>
      <Input 
      type='email'
      color='black'
      minLength="3" maxLength="20"
      placeholder='email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
        //  
      />
    </FormControl>

    </div>
   
    <div>
    <FormControl >
      <FormLabel color='black'>numero de telephone</FormLabel>
      <InputGroup>
        <InputLeftAddon children='+216' />
        <Input placeholder='numero de telephone'
        type='number'
        color='black' 
       value={numberphone}
       onChange={(e) => setNumberphone(e.target.value)}
      
     />
     
      </InputGroup>
    </FormControl>
    
    </div>
    
      
    </form>
      )}
    </Menu>
    </div>

            {/* profile  */}
    <div className='containt'>
    <Menu>
      <MenuButton color='black' as={Button} rightIcon={<ChevronDownIcon />} onClick={() => handleToggleForm('profile')}>
      Profile
      </MenuButton>
      {showProfileForm && (
      <form  className='formulaire'>
    <FormControl  >
      <FormLabel color='black'>aboutus</FormLabel>
      <InputGroup>
        <Textarea
         placeholder='ABOUTUS'
        type='text'
        color='black' 
        minLength="3" maxLength="20"
       value={aboutus}
       onChange={(e) => setAboutus(e.target.value)}
     />
     
      </InputGroup>
    </FormControl>
    
    </form>
      )}
    </Menu>
    </div >

           {/* COMPÉTENCES */}
     <div className='containt' >
    <Menu>
      <MenuButton color='black' as={Button} rightIcon={<ChevronDownIcon />} onClick={() => handleToggleForm('competance')}>
      COMPÉTENCES
      </MenuButton>
      {showCompetanceForm && (
      <form  className='formulaire'>
    <FormControl  >
      <InputGroup>
      <div style={{display: "flex",flexWrap: "wrap",flexDirection: "column"}}>
      <FormLabel color='black'>competance</FormLabel>
        <Input placeholder='competance' 
      type='text'
      color='black'
      minLength="3" maxLength="12"
      value={competance}
      onChange={(e) => setCompetance(e.target.value)}
      />
      <FormLabel color='black'>note</FormLabel>
        <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        niveau
      </MenuButton>
      <MenuList value={rating}>
        <MenuItem value="1" onClick={() => handleItemClicks("1")}>1</MenuItem>
        <MenuItem value="2" onClick={() => handleItemClicks("2")}>2</MenuItem>
        <MenuItem value="3" onClick={() => handleItemClicks("3")}>3</MenuItem>
        <MenuItem value="4" onClick={() => handleItemClicks("4")}>4</MenuItem>
        <MenuItem value="5" onClick={() => handleItemClicks("5")}>5</MenuItem>
      </MenuList>
    </Menu>  
      <button style={{ display: "none" }} type="submit"></button>
</div>
      </InputGroup>
    </FormControl>
    <div style={{display:"flex",width: "41%",float: "right", color: "white",gap: "5%"}}>
    
    </div>
    
    </form>
      )}
    </Menu>
    </div >
                  {/* Langues */}
     <div className='containt' >
     <Menu>
      <MenuButton color="black" as={Button} rightIcon={<ChevronDownIcon />}onClick={() => handleToggleForm('langue')}>
     Langue
     </MenuButton>
      {showLangueForm && (
        <form>
          <FormControl>
            <InputGroup>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <FormLabel color="black">Langue</FormLabel>
                <Input
                  placeholder="langue"
                  type="text"
                  color="black"
                  minLength="3"
                  maxLength="12"
                  value={langue}
                  onChange={(e) => setLangue(e.target.value)}
                />

          <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        niveau
      </MenuButton>
      <MenuList value={niveau}>
        <MenuItem value="faible" onClick={() => handleItemClick("faible")}>faible</MenuItem>
        <MenuItem value="bien" onClick={() => handleItemClick("bien")}>bien</MenuItem>
        <MenuItem value="tres bien" onClick={() => handleItemClick("tres bien")}>tres bien</MenuItem>
      </MenuList>
    </Menu>
                
                  <button style={{ display: 'none' }} type="submit"></button>
                </div>
            </InputGroup>
          </FormControl>
        </form>
      )};
    </Menu>
    </div >
                {/* formation */}
 <div className='containt' >
    <Menu>
      <MenuButton color='black' as={Button} rightIcon={<ChevronDownIcon />} onClick={() => handleToggleForm('formation')}>
      Formation
      </MenuButton>
      {showFormationForm && (
      <form  className='formulaire'>
    <FormControl  >
      <InputGroup>
      <div style={{display: "flex",flexWrap: "wrap",flexDirection: "column"}}>
      <FormLabel color='black'>formation</FormLabel>
        <Input placeholder='formation' 
      type='text'
      color='black'
      minLength="3" maxLength="12"
      value={formation}
      onChange={(e) => setFormation(e.target.value)}
      />
      <div style={{display:'flex',flexWrap:"wrap"}}>
      <FormLabel color='black'>etablisment</FormLabel>
        <Input placeholder='etablisment' 
      type='text'
      color='black'
      minLength="3" maxLength="12"
      value={etablisment}
      onChange={(e) => setEtablisment(e.target.value)}
      />
      <FormLabel color='black'>ville</FormLabel>
        <Input placeholder='ville' 
      type='text'
      color='black'
      minLength="3" maxLength="12"
      value={ville}
      onChange={(e) => setVille(e.target.value)}
      />
      </div>
      <FormLabel color='black'>date debut</FormLabel>
        <div style={{display:"flex"}}>
        <Input placeholder='date debut' 
      type='text'
      color='black'
      minLength="3" maxLength="12"
      value={datedebut}
      onChange={(e) => setDatadebut(e.target.value)}
      />
      
      </div>
      <FormLabel color='black'>date fin</FormLabel>
        <div style={{display:"flex"}}>
        <Input placeholder='date fin' 
      type='text'
      color='black'
      minLength="3" maxLength="12"
      value={datafin}
      onChange={(e) => setDatafin(e.target.value)}
      />
      
      </div>
       <FormLabel color='black'>description</FormLabel>
        <Textarea
         placeholder='description'
        type='text'
        color='black' 
        minLength="3" maxLength="20"
       value={descripcertif}
       onChange={(e) => setDescripcertif(e.target.value)}
     />
     </div>
      </InputGroup>
      </FormControl>
    <div style={{display:"flex",width: "41%",float: "right", color: "white",gap: "5%"}}>
    
    </div>
    
    </form>
      )}
    </Menu>
    </div >
               {/* certificat */}
    <div className='containt' >
    <Menu>
      <MenuButton color='black' as={Button} rightIcon={<ChevronDownIcon />} onClick={() => handleToggleForm('certificat')}>
      certificat
      </MenuButton>
      {showCertificatForm && (
      <form  className='formulaire'>
    <FormControl  >
      <InputGroup>
      <div style={{display: "flex",flexWrap: "wrap",flexDirection: "column"}}>
      <FormLabel color='black'>certificat</FormLabel>
        <Input placeholder='certificat' 
      type='text'
      color='black'
      minLength="3" maxLength="12"
      value={certificat}
      onChange={(e) => setCertificat(e.target.value)}
      />
      <FormLabel color='black'>date debut</FormLabel>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        <Input placeholder='mois' 
      type='text'
      color='black'
      minLength="3" maxLength="12"
      value={datedebcertif}
      onChange={(e) => setDatedebcertif(e.target.value)}
      />
      <FormLabel color='black'>date fin</FormLabel>
      <Input placeholder='année' 
      type='text'
      color='black'
      minLength="3" maxLength="12"
      value={datefincertif}
      onChange={(e) => setDatefincertif(e.target.value)}
      />
      
      </div>
       <FormLabel color='black'>description</FormLabel>
        <Textarea
         placeholder='profile'
        type='text'
        color='black' 
        minLength="3" maxLength="20"
       value={descriptioncertficat}
       onChange={(e) => setDescriptioncertficat(e.target.value)}
     />
     </div>
      </InputGroup>
      </FormControl>
    <div style={{display:"flex",width: "41%",float: "right", color: "white",gap: "5%"}}>
    
    </div>
    
    </form>
      )}
    </Menu>
    </div >
<div style={{paddingBlock:' 4%'}}>
<Button type='submit'>
  Submit
  </Button>
{/* <Button colorScheme='blue' style={{float:"right",gap: '11px'}}><AiOutlineDownload/>downlowd</Button> */}
    </div>
    </form>
   
          
   </div>
        <div className='sideleft'  style={{color:'black'}}>
          {/* preview  */}
          <div className='emplacment_preview'>
          <div className="cv-container">
  <div className="left-column">
    <div className="section">
      <img src={avatar}/>
                        {/* image  */}
            {/* {uploading && <p>Uploading file...</p>}
  {uploadedFile && <p>File successfully uploaded: {uploadedFile}</p>}
  {uploadError && <p>Error uploading file: {uploadError}</p>}
  <input type="file" onChange={handleFileUpload} /> */}

    </div>
    <div className="section">
      <h2>À PROPOS</h2>
      <p>
        <strong>{aboutus}</strong> 
        </p>
    </div>
    
    <div className="section">
      <h2>Langues</h2>
      <p>
        {langue}
      </p>
          {niveau}

    </div>
    <div className="section">
      <h2>profile</h2>
      <p>
        {profile}
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
          <a href="mailto:contact@pgomba.com">{email}</a>
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
      <div className="section" style={{marginTop: "36px"}}>
        <h2>
            
          CERTIFICATION <br />
          <span className="text-blue">   
               {certificat}
</span>

</h2>
        <p>
        <br/>
          <strong>
          {datedebcertif},
          {datefincertif}
          </strong>
          <br/>
          {descriptioncertficat}
        </p>
    
      </div>
               <br/>

      <div className="section">
        <h2>
            
          FORMATION <br />
          <span className="text-blue">
            {formation}
          </span>
        </h2>
        <p>
          <strong>
            {datedebut} <i className="fas fa-long-arrow-alt-right" /> {datafin}
          </strong>
          <br />
          <em>{etablisment}, {ville}</em>
                    <br/>
          {descripcertif}
        </p>
      </div>
      <div className="section">
      <h2>COMPÉTENCES</h2>
      <ul className="skills">
        <li>
          <i className="icon fas fa-check-circle text-darkblue" />{" "}
          <strong>{competance}</strong>
          <i className="icon fas fa-check-circle text-darkblue" />{" "}
          {rating}
        </li>
      </ul>
    </div>
    </div>
  </div>
</div>
          </div>
        </div>
</div>

       );
  
}

export default Index