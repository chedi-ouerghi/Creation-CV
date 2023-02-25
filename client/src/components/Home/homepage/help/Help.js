import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { sendEmail } from '../../../../redux/Action/emailActions';
import './help.css'
const Help = () => {
  const dispatch = useDispatch();
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendEmail(recipient, subject, message));
  };
  return (
    <div className='help'>
        <div id="contact">
  <div className="contact-box">
    <div className="contact-links">
      <h2>CONTACT</h2>
      <div className="links">
        <div className="link">
          <a>
            <img
              src="https://i.postimg.cc/m2mg2Hjm/linkedin.png"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="link">
          <a>
            <img src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" />
          </a>
        </div>
        <div className="link">
          <a>
            <img
              src="https://i.postimg.cc/W4Znvrry/codepen.png"
              alt="codepen"
            />
          </a>
        </div>
        <div className="link">
          <a>
            <img src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" />
          </a>
        </div>
      </div>
    </div>
    <div className="contact-form-wrapper">
      <form className='formm'>
        <div className="form-item">
        <label style={{color:'black'}}>email:</label>

          <input className='inpute' type="text" name="sender" placeholder="email"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          />
        </div>
        <div className="form-item">
        <label style={{color:'black'}}>subject:</label>

          <input className='inpute' type="text" name="email"  placeholder="subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="form-item">
        <label style={{color:'black'}}>Message:</label>

          <textarea  name="message"  placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)} />
        </div>
        <button className="submit-btn" onClick={handleSubmit}>Send</button>
      </form>
    </div>
  </div>
</div>
</div>
  )
}

export default Help