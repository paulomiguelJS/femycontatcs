import PropTypes from "prop-types";

import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";

import FormGroup from "../FormGroup";

import { Form, ButtonContainer } from "./styles";
import { useState } from "react";

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState("");

  const emailInput = useRef(null);

  return (
    <Form>
      <FormGroup>
        <Input
          value={name}
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>

      <FormGroup error="This email is not valid">
        <Input placeholder="Email" ref={emailInput} />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Phone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>
      <ButtonContainer></ButtonContainer>
      <Button>{buttonLabel}</Button>
    </Form>
  );
}

ContactForm.protoTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
