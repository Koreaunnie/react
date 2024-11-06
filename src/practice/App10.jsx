import React from "react";

function App10(props) {
    const a = [
        { name: "son", age: 30 },
        { name: "rose", age: 10 },
        { name: "faker", age: 40 },
        { name: "hankang", age: 50 },
        { name: "lee", age: 20 },
        { name: "kim", age: 70 },
    ];

    // 30세 이상인 사람의 이름만 출력
    /*
    <h1>son</h1>
    <h1>faker</h1>
    <h1>hankang</h1>
    <h1>kim</h1>
     */

    return (
        <div>
            {a.map((item) => (
                <>{item.age >= 30 && <h1>{item.name}</h1>}</>
            ))}
            <hr />
            {a
                .filter((item) => item.age >= 30)
                .map((item) => (
                    <h1>{item.name}</h1>
                ))}
        </div>
    );
}

export default App10;