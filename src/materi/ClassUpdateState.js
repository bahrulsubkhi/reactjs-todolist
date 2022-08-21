import React, { Component } from 'react';

class App extends Component {
  state = {
    isVisible: false
  };

  handleClick = () => {
      this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          Say Hello
        </button>
        {this.state.isVisible ? <Greeting name="Paijo" /> : <div />}
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