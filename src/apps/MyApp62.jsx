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
    </div>
  );
}

export default MyApp62;
