import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input.jsx";
import { Button } from "../components/ui/button.jsx";
import { DataListItem, DataListRoot } from "../components/ui/data-list.jsx";
import axios from "axios";

function App66(props) {
  const [id, setId] = useState(0);
  const [supplier, setSupplier] = useState(null);

  const handleClick = () => {
    axios.get(`/api/main6/sub2/${id}`).then((res) => setSupplier(res.data));
  };
  return (
    <div>
      <Field>
        <NumberInputRoot value={id} onValueChange={(e) => setId(e.value)}>
          <NumberInputField />
        </NumberInputRoot>
      </Field>
      <Button onClick={handleClick}>거래처 조회</Button>
      <hr />
      {supplier ? (
        <DataListRoot>
          <DataListItem label={"ID"} value={supplier.id} />
          <DataListItem label={"공급자명"} value={supplier.name} />
          <DataListItem label={"담당자"} value={supplier.contact} />
          <DataListItem label={"주소"} value={supplier.address} />
          <DataListItem label={"도시"} value={supplier.city} />
          <DataListItem label={"우편번호"} value={supplier.postalCode} />
          <DataListItem label={"국가"} value={supplier.country} />
          <DataListItem label={"전화번호"} value={supplier.phone} />
        </DataListRoot>
      ) : (
        <p>조회된 거래처가 없습니다.</p>
      )}
    </div>
  );
}

export default App66;
