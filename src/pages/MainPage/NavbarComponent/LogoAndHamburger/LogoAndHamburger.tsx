import { Col, Row } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { Logo } from "../Logo/Logo";

export const LogoAndHamburger: React.FC = () => {
  return (
    <Row className="mt-4">
      <Col className="d-flex align-items-center justify-content-between">
        <List size={40} fontWeight={500} />
        <Logo />
      </Col>
    </Row>
  );
};
