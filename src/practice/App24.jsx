import React from "react";

function App24(props) {
    return (
        <div>
            <MyButton color="black">클릭하세요</MyButton>
            <hr/>
            <MyButton color="yellow">다시 클릭하세요.</MyButton>
        </div>
    );
}

function MyButton({color, children}) {
    return (
        <button
            style={{
                backgroundColor: color,
                color: color === "black" ? "yellow" : "black",
            }}
        >
            {children}
        </button>
    );
}

export default App24;