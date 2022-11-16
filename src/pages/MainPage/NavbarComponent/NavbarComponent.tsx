import React, { useState } from "react";
import { ChatRoomsMenu } from "./ChatRoomsMenu/ChatRoomsMenu";
import { LogoAndHamburger } from "./LogoAndHamburger/LogoAndHamburger";
import { StyledNavbar } from "./StyledNavbar";
import { UsernameInput } from "./UsernameInput/UsernameInput";

interface Props {
  chatRooms: string[];
  chatRoom: string;
  username: string;
  setChatRooms: React.Dispatch<React.SetStateAction<string[]>>;
  setChatRoom: React.Dispatch<React.SetStateAction<string>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}
export const NavbarComponent: React.FC<Props> = ({
  chatRooms,
  setChatRooms,
  chatRoom,
  setChatRoom,
  username,
  setUsername,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <StyledNavbar fixed="top" className="d-block" $isCollapsed={isCollapsed}>
      <ChatRoomsMenu
        chatRooms={chatRooms}
        setChatRooms={setChatRooms}
        chatRoom={chatRoom}
        setChatRoom={setChatRoom}
      />
      <UsernameInput username={username} setUsername={setUsername} />
      <LogoAndHamburger setIsCollapsed={setIsCollapsed} />
    </StyledNavbar>
  );
};
