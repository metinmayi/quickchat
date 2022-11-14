import React from "react";
import { Col, Row } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { Logo } from "../Logo/Logo";

interface Props {
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}
export const LogoAndHamburger: React.FC<Props> = ({ setIsCollapsed }) => {
  return (
    <Row className="mt-4">
      <Col className="d-flex align-items-center justify-content-between">
        <List
          size={40}
          fontWeight={500}
          onClick={() => setIsCollapsed((current) => !current)}
        />
        <Logo />
      </Col>
    </Row>
  );
};
