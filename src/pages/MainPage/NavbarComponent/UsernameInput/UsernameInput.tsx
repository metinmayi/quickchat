import { Col, Row } from "react-bootstrap";

export const UsernameInput: React.FC = () => {
  return (
    <Row>
      <Col>
        <h6 className="m-0">Username:</h6>
        <input defaultValue="Metin"></input>
      </Col>
    </Row>
  );
};
