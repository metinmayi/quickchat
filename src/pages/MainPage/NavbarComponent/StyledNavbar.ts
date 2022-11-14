import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  padding: 1.5em;
  border-bottom: 2px solid black;
  border-radius: 10px;
  transition: top 0.5s;
  top: ${(props) => (props.$isCollapsed ? "-14%" : "0")};
`;
