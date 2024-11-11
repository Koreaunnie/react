import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";

function MyApp56(props) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  function handleClickButton1() {
    setCount1(count1 + 1);
  }

  function handleClickButton2() {
    const p = new Promise((resolve) => {
      setTimeout(() => {
        resolve(count2 + 1);
      }, 1000);
    });

    p.then((value) => setCount2(value));
  }

  function handleClickButton3() {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        // 랜덤으로 숫자가 0.5 이하면 resolve, 0.5 이상이면 reject
        const r = Math.random();
        console.log(r);
        if (r < 0.5) {
          resolve(count3 + 1);
        } else {
          reject();
        }
      }, 1000);
    });

    // resolve 시 실행
    p.then((value) => setCount3(value));

    // reject 시 실행
    p.catch(() => {
      console.log("함수3 Promise 에서 reject 됨");
    });

    // 이렇게 연결해서 쓰는 게 더 많이 쓰임
    // p.then((value) => setCount3(value)).catch(() => {
    //   console.log("함수3 Promise 에서 reject 됨");
    // });
  }

  function handleClickButton4() {
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {
        const r = Math.random();
        console.log(r);
        if (r < 0.5) {
          resolve(count4 + 1);
        } else {
          reject;
        }
      }, 1000);
    });

    // then 함수에서 나오는 값은 다음 then 함수에서 그 사용 가능
    p.then((v) => v + 1)
      .then((v) => setCount4(v))
      .catch(() => {
        console.log("함수4 Promise 에서 reject 됨");
      });
  }

  return (
    <div>
      <Button onClick={handleClickButton1}>버튼1: {count1}</Button>
      <hr />
      <Button onClick={handleClickButton2}>버튼2: {count2}</Button>
      <hr />
      <Button onClick={handleClickButton3}>버튼3: {count3}</Button>
      <hr />
      <Button onClick={handleClickButton4}>버튼4: {count4}</Button>
    </div>
  );
}

export default MyApp56;
