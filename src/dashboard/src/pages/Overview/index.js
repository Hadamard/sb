import React from 'react';
import meineDokumentation from './README.md';

const MeineKomponente = () => (
  <div dangerouslySetInnerHTML={{ __html: meineDokumentation }} />
);

export default MeineKomponente;
