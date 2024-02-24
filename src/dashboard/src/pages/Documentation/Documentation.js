import React from 'react';

class IframeComponent extends React.Component {
  render() {
    return (
      <div>
       
        <iframe
          title="Documentation"
          src="https://hadamard.com/c/documentation/"
          width="100%"
          height="100%"
          frameBorder="0"
        />
      </div>
    );
  }
}

export default IframeComponent;
