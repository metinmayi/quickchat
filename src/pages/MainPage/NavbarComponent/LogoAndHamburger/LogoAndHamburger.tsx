import React from "react";
import { Col } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { Logo } from "../Logo/Logo";
import { StyledRow } from "./StyledRow";

interface Props {
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}
export const LogoAndHamburger: React.FC<Props> = ({ setIsCollapsed }) => {
  return (
    <StyledRow>
      <Col className="d-flex align-items-center justify-content-between">
        <List
          size={40}
          fontWeight={500}
          onClick={() => setIsCollapsed((current) => !current)}
        />
        <Logo />
      </Col>
    </StyledRow>
  );
};
