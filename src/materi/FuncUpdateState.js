import React, { useState } from "react";

const App = () => {
  const [isVisible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>Say Hello</button>
      {isVisible ? <Greeting name="Paijo" /> : <div />}
      <br />
    </div>
  );
};

const Greeting = props => {
  const { name } = props;

  return <h1>Hello {name}</h1>;
};

export default App;