import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp62(props) {
  return (
    <div>
      <Button
        onClick={() => axios.post("/api/main2/sub1", { name: "kim", age: 99 })}
      >
        Person
      </Button>

      <Button
        onClick={() =>
          axios.post("/api/main2/sub2", {
            title: "채식주의자",
            author: "한강",
            content: "노벨상",
            price: 99999,
            quantity: 100,
          })
        }
      >
        Book
      </Button>

      <Button
        onClick={() => {
          axios.post("api/main2/sub3", {
            name: "kim",
            age: 99,
            married: true,
            items: ["house", "car"],
            team: {
              name: "twins",
              location: "seoul",
            },
          });
        }}
      >
        Player
      </Button>

      <Button
        onClick={() =>
          axios.post("/api/main2/sub4", {
            id: "1",
            name: "자동차",
            available: true,
            shops: ["ford", "jeep"],
            attribute: {
              name: "suv",
              value: "high",
            },
          })
        }
      >
        Product
      </Button>

      <Button
        onClick={() =>
          axios.post("/api/main2/sub5", ["coffee", "lattee", "mocha"])
        }
      >
        List-items
      </Button>

      <Button
        onClick={() => {
          axios.post("/api/main2/sub6", [
            { name: "son", age: 11 },
            { name: "han", age: 22 },
            { name: "faker", age: 33 },
          ]);
        }}
      >
        List-people
      </Button>

      <Button
        onClick={() =>
          axios.post("/api/main2/sub7", [
            {
              title: "제목1",
              author: "저자1",
              price: 5000,
              content: "소설",
              quantity: 22,
            },
            {
              title: "제목12",
              author: "저자2",
              price: 3000,
              content: "sf",
              quantity: 23,
            },
          ])
        }
      >
        List-books
      </Button>
    </div>
  );
}

export default MyApp62;
