import { Link } from "react-router-dom";
import {
  Container,
  InputSearchContainer,
  Header,
  ListContainer,
  Card,
} from "./styles";

import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";
import Modal from "../../components/Modal";

export default function Home() {
  return (
    <Container>
      <Modal />
      <InputSearchContainer>
        <input type="text" placeholder="Search by name" />
      </InputSearchContainer>
      <Header>
        <strong>3 contacts</strong>
        <Link to="/new">New contact</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Name</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>
        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Paulo Miguel</strong>
              <small>INSTAGRAM</small>
            </div>
            <span>paulomiguelblues@gmail.com</span>
            <span>(603) 9999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="Edit" />
            </Link>
            <button type="button">
              <img src={trash} alt="Trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
