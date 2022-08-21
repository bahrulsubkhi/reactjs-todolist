import React, { Component } from 'react';

class App extends Component {
  state = {
    isVisible: false,
    text: "",
    trys:false
  };

  componentDidMount() {
    this.setState({ ...this.state, text: "This text show after component is rendered" })
    this.setState({trys:true})
    console.log(this.state.trys);
  }

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
        <br />
        <h2>{this.state.text}</h2>
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