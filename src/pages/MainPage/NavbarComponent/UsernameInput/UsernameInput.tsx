import React from "react";
import { Col, Row } from "react-bootstrap";

interface Props {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}
export const UsernameInput: React.FC<Props> = ({ username, setUsername }) => {
  return (
    <Row>
      <Col>
        <h6 className="m-0">Username:</h6>
        <input
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}></input>
      </Col>
    </Row>
  );
};
