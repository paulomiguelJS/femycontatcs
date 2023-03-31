import PropTypes from "prop-types";
import { useState } from "react";
import isEmailValid from "../../utils/isEmailValid";

import FormGroup from "../FormGroup";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";

import { Form, ButtonContainer } from "./styles";

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = usFeState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [erros, setErros] = useState([]);

  function handleNameChange(event) {
    setName(event.target.value);
    if (!event.target.value) {
      setErros((prevState) => [
        ...prevState,
        { filed: "name", message: "Name is required." },
      ]);
    } else {
      setErros((prevState) =>
        prevState.filter((error) => error.field == !"name")
      );
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      const errorAlreadyExistis = erros.find(
        (error) => error.field === "email"
      );

      if (errorAlreadyExistis) {
        return;
      }

      setErros((prevState) => [
        ...prevState,
        { filed: "email", message: "Email is not valid." },
      ]);
    } else {
      setErros((prevState) =>
        prevState.filter((error) => error.field == !"email")
      );
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      name,
      email,
      phone,
      category,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input placeholder="Name" value={name} onChange={handleNameChange} />
      </FormGroup>

      <FormGroup error="This email is not valid">
        <Input placeholder="Email" value={email} onChange={handleEmailChange} />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="Telegram">Telegram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.protoTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
