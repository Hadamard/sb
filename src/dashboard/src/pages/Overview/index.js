import { useState, useEffect } from 'react';

import './styles.css';
import MyChartComponent from '@/pages/Overview/MyChartComponent';



const ContactForm = () => {
  

  
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
        <div className="form">
            <label for="username">Name:</label>
            <input type="text" id="username" name="username" required/>
            
            <label for="password">E-Mail:</label>
            <input type="email" id="password" name="password" required/>
            
            <label for="subject">Subject:</label>
            <input type="subject" id="sub" name="sub" required />

            <label for="message">Message:</label>
            <input type="message" id="message" name="message" required/>
            
            <div className="textbox-container">
              <button type="submit" className="progressbar-container">
                
                <div className="progressbar" id="progressbar">Send</div>
              </button>
            </div>
        
        
          </div>


    </div>

  
</div>




</div>




<MyChartComponent> </MyChartComponent>
  

</div>




  
 
  );
};

export default ContactForm;

  
