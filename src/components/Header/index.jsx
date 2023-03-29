import { Container } from "./styles";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";

export default function Header() {
  return (
    <Container>
      <a href="/">
        <img src={logo} alt="Logo" width="201" />
      </a>
    </Container>
  );
}
