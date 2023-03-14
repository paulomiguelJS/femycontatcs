import { Container } from "./styles";

import logo from "../../assets/images/logo.svg";

console.log(logo);

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo" width="201" />
    </Container>
  );
}
