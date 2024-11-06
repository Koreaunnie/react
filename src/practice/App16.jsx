import React from "react";

function App16(props) {
    return <div>
        <MyCom address={"ny"} city={"seoul"} score={9.88}/>
        <MyCom address={"ca"} city={"busan"} score={8.99}/>
    </div>
};

function MyCom(props) {
    return <div>
        <h3>주소: {props.address}, 도시: {props.city}, 점수: {props.score}</h3>
    </div>
}

export default App16;
