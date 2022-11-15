import { Container } from "react-bootstrap";
import { NavbarComponent } from "./NavbarComponent/NavbarComponent";
import { SendMessageComponent } from "./SendMessageComponent/SendMessageComponent";

export const MainPage: React.FC = () => {
  return (
    <Container>
      <NavbarComponent />
      <SendMessageComponent />
    </Container>
  );
};
