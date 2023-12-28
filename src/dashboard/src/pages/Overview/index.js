import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import MyChartComponent from '@/pages/Overview/MyChartComponent';
import Hubspot from '@/components/Hubspot';
import qwer from '@/components/qwer';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';




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



  const stripePromise = loadStripe('pk_live_51NxABWG9TKiSYMBESorYPcskqUxHGyR4ER8cOgPflN3wu2wVndJnB9ctuEV4NbZU2TVcDKcJ9JgswPWpM1W1wqYG00xYpVZ12l');
  
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





    
    <Elements stripe={stripePromise}>
      <stripe />
    </Elements>
  
  

 <div>


<Hubspot> </Hubspot>

    
<MyChartComponent className="Chart"> </MyChartComponent>

</div>




</div>





  

</div>




  
 
  );
};

export default SupportTicketForm;

  
  
