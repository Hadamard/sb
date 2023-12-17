import React, { useEffect } from 'react';

const HubSpotForm = () => {
  useEffect(() => {
    // Erstellen eines Script-Tags
    const script = document.createElement('script');
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;

    // Füge das Script-Tag zum Body hinzu
    document.body.appendChild(script);

    script.onload = () => {
      // Stelle sicher, dass das hbspt-Objekt verfügbar ist
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "143301083",
          formId: "2cd78754-bc61-4a44-82e1-0b291e029ed0"
        });
      }
    };

    // Entferne das Script-Tag beim Unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Hier kann ein Platzhalter oder ein Loader angezeigt werden, bis das Formular geladen ist */}
    </div>
  );
};

export default HubSpotForm;
