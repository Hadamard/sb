import React, { useState } from 'react';
import axios from 'axios';


  const [number, setNumber] = useState(null);

  const fetchRandomNumber = async () => {
    const response = await axios.get('http://localhost:5000/random_number');
    setNumber(response.data.number);
 

  return (
  <div>
        {number !== null ? <p>Abgerufene Nummer: {number}</p> : <p>Noch keine Zahl abgerufen.</p>}
      </div>
  );
}

export default App;

