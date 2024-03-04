import React from 'react';

class IframeComponent extends React.Component {
  render() {
    const iframeStyle = {
      width: '100%',
      height: '100%',
      border: 'none',
      display: loading ? 'none' : 'block'// optional: removes iframe border
    };

  const IframeComponent = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };
    
    return (
      <div style={{ width: '100%', height: '100%' }}>
    
        <iframe
          title="Documentation Hadamard"
          onLoad={handleLoad}
          src="https://hadamard.com/c/docs"
          style={iframeStyle}
        />
      </div>
    );
  }
}

export default IframeComponent;
