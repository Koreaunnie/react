import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";
import { Table } from "@chakra-ui/react";

function MyBookTableView({ books }) {
  if (!books || books.length == 0) {
    return <div>책 목록을 조회해 주세요.</div>;
  }
  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>TITLE</Table.ColumnHeader>
            <Table.ColumnHeader>CONTENT</Table.ColumnHeader>
            <Table.ColumnHeader>AUTHOR</Table.ColumnHeader>
            <Table.ColumnHeader>PRICE</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {books.map((book) => (
            <Table.Row>
              <Table.Cell>{book.title}</Table.Cell>
              <Table.Cell>{book.content}</Table.Cell>
              <Table.Cell>{book.author}</Table.Cell>
              <Table.Cell>{book.price}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
}

function MyApp65(props) {
  const [books, setBooks] = useState([]);

  <Button
    onClick={() => {
      axios.get("/api/main5/sub10").then((res) => setBooks(res.data));
    }}
  >
    btn11
  </Button>;

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

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub8")
            .then((res) => res.data)
            .then((data) => console.log(data));
        }}
      >
        btn8
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub9")
            .then((res) => res.data)
            .then((data) => {
              console.log(data.name);
              console.log(data.address);
              console.log(data.married);
              console.log(data.items[0]);
              console.log(data.items[1]);
              console.log(data.company.name);
              console.log(data.company.location);
            });
        }}
      >
        btn9
      </Button>

      <Button
        onClick={() => {
          axios
            .get("/api/main5/sub10")
            .then((res) => res.data)
            .then((data) => {
              console.log(data[0].title);
              console.log(data[0].author);
              console.log(data[0].content);
              console.log(data[0].price);

              console.log(data[1].title);
              console.log(data[1].author);
              console.log(data[1].content);
              console.log(data[1].price);

              console.log(data[2].title);
              console.log(data[2].author);
              console.log(data[2].content);
              console.log(data[2].price);
            });
        }}
      >
        btn10
      </Button>

      <Button
        onClick={() => {
          axios.get("/api/main5/sub10").then((res) => setBooks(res.data));
        }}
      >
        btn11
      </Button>

      <MyBookTableView books={books} />
    </div>
  );
}

export default MyApp65;
