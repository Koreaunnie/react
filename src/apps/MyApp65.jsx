import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp65(props) {
  return (
    <div>
      <Button
        onClick={() => {
          axios.get("/api/main5/sub1").then((response) => {
            console.log(response);
            console.log(response.data);
          });
        }}
      >
        btn1
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub1")
            .then((response) => response.data)
            .then((data) => console.log(data));
        }}
      >
        btn2
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub3")
            .then((response) => response.data)
            .then((data) => console.log(data));
        }}
      >
        btn3
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub4")
            .then((r) => r.data)
            .then((d) => {
              console.log(d);
              console.log(d.name);
              console.log(d.age);
            });
        }}
      >
        btn4
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub5")
            .then((r) => r.data)
            .then((d) => {
              console.log(d.title);
              console.log(d.content);
              console.log(d.price);
              console.log(d.available);
            });
        }}
      >
        btn5
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub6")
            .then((r) => r.data)
            .then((d) => {
              console.log(d.name);
              console.log(d.items[0]);
              console.log(d.items[1]);
              console.log(d.items[2]);
              console.log(d.team.name);
              console.log(d.team.location);
            });
        }}
      >
        btn6
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub7")
            .then((response) => response.data)
            .then((data) => {
              console.log(data.product.name);
              console.log(data.product.price);
              console.log(data.company.location[0]);
              console.log(data.company.location[1]);
              console.log(data.product.quantity);
            });
        }}
      >
        btn7
      </Button>
    </div>
  );
}

export default MyApp65;
