import React from 'react';

class cost extends React.Component {
  render() {
    const iframeStyle = {
      width: '100%',
      height: '100%',
      border: 'none' // optional: removes iframe border
    };

    return (
      <div style={{ width: '100%', height: '100%' }}>
    
        <iframe
          title="Documentation"
          src="http://bb84.com/dash"
          style={iframeStyle}
        />
      </div>
    );
  }
}

export default cost;
