import React from "react";

class App extends React.Component {
  render() {
    const name = "Raul";
    const saludo = `Hello ${name}`;

    return <h1>{saludo}</h1>;
  }
}

export default App;
