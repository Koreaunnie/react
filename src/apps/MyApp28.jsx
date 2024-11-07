import React from "react";
import { HStack, Icon, Input, Textarea } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";
import { Checkbox } from "../components/ui/checkbox.jsx";
import { HiOutlinePlus } from "react-icons/hi";
import { Radio, RadioGroup } from "../components/ui/radio.jsx";
import { Switch } from "../components/ui/switch.jsx";
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "../components/ui/radio-card.jsx";
import { FaApplePay } from "react-icons/fa6";

function MyApp28(props) {
  return (
    <div style={{ margin: "10px" }}>
      <h5>icons</h5>
      <FaApplePay />

      <hr />

      <h5>radio card</h5>
      <RadioCardRoot>
        <RadioCardLabel>결제 수단</RadioCardLabel>
        <HStack>
          <RadioCardItem value="1" label="신용카드"></RadioCardItem>
          <RadioCardItem value="2" label="계좌이체"></RadioCardItem>
          <RadioCardItem
            indicator={null}
            value="3"
            label="삼성페이"
          ></RadioCardItem>
          <RadioCardItem
            icon={
              <Icon fontSize="2xl">
                <FaApplePay />
              </Icon>
            }
            indicator={null}
            value="4"
            label="애플페이"
          ></RadioCardItem>
        </HStack>
      </RadioCardRoot>

      <hr />

      <h5>switch</h5>
      <Switch>동의</Switch>
      <Switch variant="raised">동의</Switch>

      <hr />

      <h5>radio button</h5>
      <RadioGroup>
        <Radio value={1}>option1</Radio>
        <Radio value={2}>option2</Radio>
        <Radio value={3}>option3</Radio>
      </RadioGroup>

      <hr />

      <h5>checkbox</h5>
      <Checkbox variant="outline" checked>
        동의
      </Checkbox>
      <Checkbox variant="solid">동의</Checkbox>
      <Checkbox variant="subtle">동의</Checkbox>
      <Checkbox icon={<HiOutlinePlus />}>동의</Checkbox>

      <input type="checkbox" id="check1" />
      <label htmlFor="check1">동의</label>

      <Textarea placeholder="자기소개 1000자 이내" variant="outline"></Textarea>

      <hr />

      <Field label="Email" required helperText="이메일을 입력해주세요.">
        <Input />
      </Field>
      <Input variant="subtle" placeholder="이메일을 입력해주세요." />
      <Input variant="outline" placeholder="이메일을 입력해주세요." />
      <Input variant="flushed" placeholder="이메일을 입력해주세요." />

      <hr />

      <input type="text" placeholder="이메일을 입력해주세요." />
    </div>
  );
}

export default MyApp28;
