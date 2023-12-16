import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [number, setNumber] = useState(null);

  const fetchRandomNumber = async () => {
    const response = await axios.get('http://localhost:5000/random_number');
    setNumber(response.data.number);
  };

  return (
    <div>
      <button onClick={fetchRandomNumber}>Generiere Zufallszahl</button>
      {number !== null && <p>Zufallszahl: {number}</p>}
    </div>
  );
}

export default App;

