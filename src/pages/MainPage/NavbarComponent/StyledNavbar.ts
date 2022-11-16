import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  border: 2px solid black;
  border-radius: 10px;
  transition: top 0.5s;
  max-width: 750px;
  margin: auto;
  transform: translateY(
    ${(props) => (props.$isCollapsed ? "var(--navbarTranslate)" : "0%")}
  );
  transition: 0.5s;
  background-color: var(--backgroundColor);

  > .row {
    padding: 2%;
  }
`;
