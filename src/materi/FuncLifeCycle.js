import React, { useState, useEffect } from "react";

const App = () => {
  const [isVisible, setVisible] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    setText("This text show after component is rendered")
  }, [])

  const handleClick = () => {
    setVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>Say Hello</button>
      {isVisible ? <Greeting name="Paijo" /> : <div />}
      <br />
      <h2>{text}</h2>
    </div>
  );
};

const Greeting = props => {
  const { name } = props;

  return <h1>Hello {name}</h1>;
};

export default App;