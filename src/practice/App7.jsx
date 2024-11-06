import React from "react";

function App7(props) {
    const a = "hello";
    const b = 123.456;
    const c = true;
    const d = false;

    /*
      <h1>hello</h1>
      <input type="number" value="123.456" />
      <br />
      <input type="text" disabled />
      <input type="text" />

     */
    return (
        <div>
            <h1>{a}</h1>
            <input type="number" value={b} />
            <br />
            <input type="text" disabled={c} />
            <input type="text" disabled={d} />
        </div>
    );
}

export default App7;