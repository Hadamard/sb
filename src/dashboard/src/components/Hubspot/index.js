
import React, { useEffect } from 'react';

const Hubspot = () => {
  useEffect(() => {
    // Füge den HubSpot-Code hier ein
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'hs-script-loader';
    script.async = true;
    script.defer = true;
    script.src = '//js-eu1.hs-scripts.com/143301083.js';
    document.head.appendChild(script);

    // Optional: Entferne das Skript beim Komponentenabbau, um mögliche Probleme zu vermeiden
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Das leere Array stellt sicher, dass der Effekt nur einmalig beim Montieren der Komponente ausgeführt wird

  return (
    <div>
      {/* Hier kannst du den restlichen React-Code für deine Komponente hinzufügen */}
      <p>Deine React-Komponente mit HubSpot-Integration</p>
    </div>
  );
};

export default Hubspot;
