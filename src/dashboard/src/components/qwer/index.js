// YourPricingTableComponent.js
import React from 'react';

const qwer = () => {
  return (
    <div>
      {/* Hier können Sie Ihre Pricing-Tabelle und andere React-Elemente hinzufügen */}
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table
        pricing-table-id="prctbl_1OSAczG9TKiSYMBEhlqeuBim"
        publishable-key="pk_live_51NxABWG9TKiSYMBESorYPcskqUxHGyR4ER8cOgPflN3wu2wVndJnB9ctuEV4NbZU2TVcDKcJ9JgswPWpM1W1wqYG00xYpVZ12l"
      ></stripe-pricing-table>
    </div>
  );
};

export default qwer;

