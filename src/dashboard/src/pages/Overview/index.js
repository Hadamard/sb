import React, { useState, useEffect } from 'react';

const BitcoinPrice = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(data => {
        setPrice(data.bpi.USD.rate);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      <h1>Current Bitcoin Price</h1>
      <p>{price ? `$${price}` : 'Loading...'}</p>
    </div>
  );
}

export default BitcoinPrice;



 

