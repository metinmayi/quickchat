import { Col, Container, Row } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { Logo } from "./Logo/Logo";
import { StyledNavbar } from "./StyledNavbar";

export const Header: React.FC = () => {
  return (
    <StyledNavbar fixed="top" className="d-block">
      <Row>
        <Col className="d-flex align-items-center justify-content-between">
          <List size={40} fontWeight={500} />
          <Logo />
        </Col>
      </Row>
    </StyledNavbar>
  );
};
