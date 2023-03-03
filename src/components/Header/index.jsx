import { Container, InputSearchContainer } from "./styles";

import logo from "../../assets/images/logo.svg";

console.log(logo);

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" width="201" />
      <InputSearchContainer>
        <input type="text" placeholder="Search by name"/>
      </InputSearchContainer>
    </Container>
  );
}
