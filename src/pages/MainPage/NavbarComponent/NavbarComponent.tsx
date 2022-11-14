import { ChatRoomsMenu } from "./ChatRoomsMenu/ChatRoomsMenu";
import { LogoAndHamburger } from "./LogoAndHamburger/LogoAndHamburger";
import { StyledNavbar } from "./StyledNavbar";
import { UsernameInput } from "./UsernameInput/UsernameInput";

export const NavbarComponent: React.FC = () => (
  <StyledNavbar fixed="top" className="d-block">
    <ChatRoomsMenu />
    <UsernameInput />
    <LogoAndHamburger />
  </StyledNavbar>
);
