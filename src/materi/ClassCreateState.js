import React, { Component } from 'react';

class App extends Component {
  state = {
    isVisible: false
  };

  render() {
    return (
      <div>
        <Greeting name="Brachio" />
      </div>
    );
  }
}

class Greeting extends Component {
  render() {
    return <h1>Hello {this.props.name}</h1>;
  }
}

export default App;