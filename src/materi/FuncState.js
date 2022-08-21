import React, { useState } from "react";

const App = () => {
  const [isVisible, setVisible] = useState(false);
  
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