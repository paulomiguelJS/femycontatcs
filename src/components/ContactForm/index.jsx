import PropTypes from 'prop-types'

import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";

import FormGroup from "../FormGroup";

import { Form, ButtonContainer } from "./styles";

export default function ContactForm({ buttonLabel }) {
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Name" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Email" />
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
}
