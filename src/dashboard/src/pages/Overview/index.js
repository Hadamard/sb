import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [number, setNumber] = useState(null);

  const fetchRandomNumber = async () => {
    try {
      const response = await axios.get('http://localhost:5000/random_number');
      setNumber(response.data.number);
    } catch (error) {
      console.error('Fehler beim Abrufen der Zahl', error);
      // Optional: Fehlerbehandlung hinzufügen
    }
  };

  return (
    <div>
      {number !== null ? <p>Abgerufene Nummer: {number}</p> : <p>Noch keine Zahl abgerufen.</p>}
      <button onClick={fetchRandomNumber}>Zahl abrufen</button>
    </div>
  );
};

export default App;


