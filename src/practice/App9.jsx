import React from "react";

function App9(props) {
    const a = ["black", "pink", "faker", "hankang"];

    /*
      <h1>black</h1>
      <h1>pink</h1>
      <h1>faker</h1>
      <h1>hankang</h1>
     */

    return (
        <div>
            {a.map((e) => (
                <h1>{e}</h1>
            ))}
        </div>
    );
}

export default App9;