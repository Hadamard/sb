import React from 'react';

class IframeComponent extends React.Component {
  render() {
    const iframeStyle = {
      width: '100%',
      height: '100%',
      border: 'none' // optional: removes iframe border
    };

    return (
      <div style={{ width: '100%', height: '100%' }}>
        <h1>Meine React-Anwendung mit einem iframe</h1>
        <iframe
          title="Documentation"
          src="https://hadamard.com/c/documentation/"
          style={iframeStyle}
        />
      </div>
    );
  }
}

export default IframeComponent;
