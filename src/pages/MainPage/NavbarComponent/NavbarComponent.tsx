import { Col, Row } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { ChatRoomsMenu } from "./ChatRoomsMenu/ChatRoomsMenu";
import { Logo } from "./Logo/Logo";
import { StyledNavbar } from "./StyledNavbar";
import { UsernameInput } from "./UsernameInput/UsernameInput";

export const NavbarComponent: React.FC = () => (
  <StyledNavbar fixed="top" className="d-block">
    <ChatRoomsMenu />
    <UsernameInput />

    <Row className="mt-4">
      <Col className="d-flex align-items-center justify-content-between">
        <List size={40} fontWeight={500} />
        <Logo />
      </Col>
    </Row>
  </StyledNavbar>
);
