import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import MyChartComponent from '@/pages/Overview/MyChartComponent';


function SupportTicketForm() {
  const [formData, setFormData] = useState({
      username: '',
      email: '',
      subject: '',
      message: ''
  });

  const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('https://gpiznri557.execute-api.eu-central-1.amazonaws.com', formData);
        console.log(response.data);
        // handle success (z.B. Benachrichtigung anzeigen)
    } catch (error) {
        console.error(error);
        // handle error (z.B. Fehlermeldung anzeigen)
    }
};


  
  return (
<div>

<div>





    
     <div className="columns">
      <ul className="price">
        <li className="header">Free</li>
        <li className="grey">$ 0.00 / month</li>
        <li className="grey">
          <a href="https://billing.stripe.com/p/login/aEU2bs5DY0Sva2ccMM" className="button">Manage plan</a>
        </li>
      </ul>
    </div>
  
  

 <div>


    <div className="login-container">
        <h1>Support Ticket</h1>
        <form className="form" onSubmit={handleSubmit}>
            <label for="username">Name:</label>
            <input type="text" id="username" name="username" required/>
            
            <label for="email">E-Mail:</label>
            <input type="email" id="email" name="email" required/>
            
            <label for="subject">Subject:</label>
            <input type="subject" id="subject" name="subject" required />

            <label for="message">Message:</label>
            <input type="message" id="message" name="message" required/>
            
            <button type="submit">Send</button>
        
        
          </form>


    </div>
<MyChartComponent> </MyChartComponent>

</div>




</div>





  

</div>




  
 
  );
};

export default SupportTicketForm;

  
  
