import { useState } from "react";
import { ChatRoomsMenu } from "./ChatRoomsMenu/ChatRoomsMenu";
import { LogoAndHamburger } from "./LogoAndHamburger/LogoAndHamburger";
import { StyledNavbar } from "./StyledNavbar";
import { UsernameInput } from "./UsernameInput/UsernameInput";

export const NavbarComponent: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <StyledNavbar fixed="top" className="d-block" isCollapsed={isCollapsed}>
      <ChatRoomsMenu />
      <UsernameInput />
      <LogoAndHamburger setIsCollapsed={setIsCollapsed} />
    </StyledNavbar>
  );
};
