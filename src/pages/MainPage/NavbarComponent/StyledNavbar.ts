import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  padding: 1.5em;
  border: 2px solid black;
  border-radius: 10px;
  transition: top 0.5s;
  max-width: 750px;
  margin: auto;
  top: ${(props) => (props.$isCollapsed ? "-14%" : "0")};
`;
