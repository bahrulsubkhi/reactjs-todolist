import React from "react";

const App = () => {
  return (
    <div>
      <Greeting name="Paijo" />
    </div>
  );
};

const Greeting = props => {
  const { name } = props;

  return <h1>Hello {name}</h1>;
};

export default App;