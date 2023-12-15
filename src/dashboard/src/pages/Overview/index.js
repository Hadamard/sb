import React, { useState } from 'react';

function SubscriptionComponent() {
    const [email, setEmail] = useState('');
    const [subscriptions, setSubscriptions] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchSubscriptions = async () => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:5000/get-subscriptions?email=${email}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setSubscriptions(data);
        } catch (error) {
            console.error('Failed to fetch subscriptions:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={fetchSubscriptions}>Get Subscriptions</button>
            {loading && <p>Loading...</p>}
            {subscriptions && <pre>{JSON.stringify(subscriptions, null, 2)}</pre>}
        </div>
    );
}

export default SubscriptionComponent;

