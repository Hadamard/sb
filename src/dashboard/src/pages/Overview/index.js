import React, { useState, useEffect } from 'react';

const UserPlanComponent = () => {
  const [userPlan, setUserPlan] = useState([]);

  // Hier können Sie Daten aus Ihrer API oder Datenquelle abrufen
  useEffect(() => {
    // Beispiieldaten
    const planData = [
      { tag: 'Montag', aktivität: 'Laufen' },
      { tag: 'Dienstag', aktivität: 'Schwimmen' },
      // Fügen Sie weitere Plan-Daten hier hinzu
    ];

    setUserPlan(planData);
  }, []);

  const navigateToSubscriptionManagement = () => {
    // Logik zur Navigation zur Abonnentenverwaltungsseite
    // z.B. window.location.href = '/subscription-management';
  };

  return (
    <div>
      <h2>Aktueller Plan</h2>
      <table>
        <thead>
          <tr>
            <th>Tag</th>
            <th>Aktivität</th>
          </tr>
        </thead>
        <tbody>
          {userPlan.map((item, index) => (
            <tr key={index}>
              <td>{item.tag}</td>
              <td>{item.aktivität}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={navigateToSubscriptionManagement}>
        Zur Abonnentenverwaltung
      </button>
    </div>
  );
};

export default UserPlanComponent;
