import { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import MyChartComponent from '@/pages/Overview/MyChartComponent';
import Hubspot from '@/components/Hubspot';
import Support from '@/components/Support';



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




          <Support></Support>
   
  
  

 <div>


<Hubspot> </Hubspot>

    


</div>




</div>





  

</div>




  
 
  );
};

export default SupportTicketForm;

  
  
