import React from 'react';

class IframeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  handleLoad = () => {
    this.setState({ loading: false });
  };

  render() {
    const iframeStyle = {
      width: '100%',
      height: '100%',
      border: 'none',
      display: this.state.loading ? 'none' : 'block' // optional: removes iframe border
    };

const loadingTextStyle = {
     fontSize: '30px',
      color: 'white' ,
    };
    
    return (
      <div style={{ width: '100%', height: '100%' }}>
       {this.state.loading && <div style={loadingTextStyle}>Loading ...</div>}
        <iframe
          title="Documentation Hadamard"
          onLoad={this.handleLoad}
          src="https://hadamard.com/c/docs"
          style={iframeStyle}
        />
      </div>
    );
  }
}

export default IframeComponent;

