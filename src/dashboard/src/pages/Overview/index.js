import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import MyChartComponent from '@/pages/Overview/MyChartComponent';
import Hubspot from '@/components/Hubspot';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import support from '@/components/support';



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




          <support></support>
    
  <stripe-pricing-table
      pricing-table-id="'{{prctbl_1OSAczG9TKiSYMBEhlqeuBim}}'"
      publishable-key="pk_test_51NxABWG9TKiSYMBE6R9ITIi99Jn9e6e18LLmPnLMYfCzMCeKdPGqDtPkgTgTlPjlUWyCjAxdDC6k7GcwpcgUeqWD00RBpStmwn">
    </stripe-pricing-table>
  
  

 <div>


<Hubspot> </Hubspot>

    
<MyChartComponent className="Chart"> </MyChartComponent>

</div>




</div>





  

</div>




  
 
  );
};

export default SupportTicketForm;

  
  
