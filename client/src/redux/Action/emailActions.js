import axios from 'axios';

export const sendEmail = (recipient, subject, message) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5888/email/send-email', {
      recipient,
      subject,
      message,
    });
    console.log(response.data); 
  } catch (error) {
  }
};
