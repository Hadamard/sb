import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import MyChartComponent from '@/pages/Overview/MyChartComponent';



const ContactForm = () => {
  


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
            const response = await axios.post('https://gpiznri557.execute-api.eu-central-1.amazonaws.com/', formData);
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
            
            <label for="password">E-Mail:</label>
            <input type="email" id="password" name="password" required/>
            
            <label for="subject">Subject:</label>
            <input type="subject" id="sub" name="sub" required />

            <label for="message">Message:</label>
            <input type="message" id="message" name="message" required/>
            
            <div className="textbox-container">
         
                <button className="progressbar-container" type="submit">Send</button>
                <div className="progressbar" id="progressbar">Send</div>
             
            </form>
        
        
          </div>


    </div>

  <MyChartComponent> </MyChartComponent>
</div>




</div>





  

</div>




  
 
  );
};

export default ContactForm;

  
