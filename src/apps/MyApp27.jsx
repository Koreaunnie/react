import React from "react";
import { Table } from "@chakra-ui/react";

function MyApp27(props) {
  return (
    <div>
      <h1>chakra ui 테이블</h1>
      <Table.Root variant="outline" interactive showColumnBorder>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>번호</Table.ColumnHeader>
            <Table.ColumnHeader>제목</Table.ColumnHeader>
            <Table.ColumnHeader>작성자</Table.ColumnHeader>
            <Table.ColumnHeader>작성일</Table.ColumnHeader>
            <Table.ColumnHeader>조회수</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Magnam!</Table.Cell>
            <Table.Cell>Ipsa.</Table.Cell>
            <Table.Cell>Odit!</Table.Cell>
            <Table.Cell>Excepturi.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>2</Table.Cell>
            <Table.Cell>Magnam!</Table.Cell>
            <Table.Cell>Ipsa.</Table.Cell>
            <Table.Cell>Odit!</Table.Cell>
            <Table.Cell>Excepturi.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>3</Table.Cell>
            <Table.Cell>Magnam!</Table.Cell>
            <Table.Cell>Ipsa.</Table.Cell>
            <Table.Cell>Odit!</Table.Cell>
            <Table.Cell>Excepturi.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>4</Table.Cell>
            <Table.Cell>Magnam!</Table.Cell>
            <Table.Cell>Ipsa.</Table.Cell>
            <Table.Cell>Odit!</Table.Cell>
            <Table.Cell>Excepturi.</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>5</Table.Cell>
            <Table.Cell>Magnam!</Table.Cell>
            <Table.Cell>Ipsa.</Table.Cell>
            <Table.Cell>Odit!</Table.Cell>
            <Table.Cell>Excepturi.</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>

      <h1>기본 테이블</h1>
      <table>
        <thead>
          <tr>
            <th>Lorem.</th>
            <th>Inventore.</th>
            <th>Ipsam.</th>
            <th>Molestias?</th>
            <th>Soluta?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lorem.</td>
            <td>Quos!</td>
            <td>Expedita!</td>
            <td>Alias?</td>
            <td>Tempora.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Rem.</td>
            <td>Ipsam?</td>
            <td>Dolore!</td>
            <td>Omnis.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Itaque!</td>
            <td>Vel.</td>
            <td>Deserunt!</td>
            <td>Consequatur.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Voluptatibus!</td>
            <td>Nemo!</td>
            <td>Enim.</td>
            <td>Natus.</td>
          </tr>
          <tr>
            <td>Lorem.</td>
            <td>Consectetur.</td>
            <td>Odio!</td>
            <td>Ad!</td>
            <td>Deleniti.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyApp27;
