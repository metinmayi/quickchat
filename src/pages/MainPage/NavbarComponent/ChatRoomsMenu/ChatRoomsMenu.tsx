import { Col, Row } from "react-bootstrap";

export const ChatRoomsMenu: React.FC = () => {
  return (
    <Row>
      <Col>
        <h6 className="m-0">Chat Rooms:</h6>
        <select>
          <option value="default">No rooms</option>
        </select>
      </Col>
    </Row>
  );
};
