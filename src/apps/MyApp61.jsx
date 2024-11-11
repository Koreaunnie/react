import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp61(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.post("/api/main1/sub5", {
            name: "kim",
            age: 33,
          });
        }}
      >
        btn1
      </Button>

      <Button
        onClick={() => {
          axios.post("/api/main1/sub6", {
            name: "kim",
            married: true,
            kids: null,
            items: ["house", "car", "bitcoin"],
            team: {
              name: "twins",
              location: "서울",
            },
          });
        }}
      >
        btn2
      </Button>

      <Button
        onClick={() =>
          axios.post("/api/main1/sub7", ["coffee", "coke", "milk"])
        }
      >
        btn3
      </Button>

      <Button
        onClick={() =>
          axios.post("/api/main1/sub8", [
            { name: "kim", team: "texas", age: 23 },
            { name: "son", team: "london", age: 24 },
            { name: "han", team: "kang", age: 25 },
          ])
        }
      >
        btn4
      </Button>

      <Button
        onClick={() =>
          axios.post("/api/main1/sub9", [
            { product: { name: "computer", price: 500 }, company: "samsung" },
            { product: { name: "smartphone", price: 1000 }, company: "apple" },
            {
              product: { name: "graphic card", price: 2000 },
              company: "nvidia",
            },
          ])
        }
      >
        btn5
      </Button>
    </div>
  );
}

export default MyApp61;
