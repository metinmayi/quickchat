import { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { ChatAreaComponent } from "./ChatAreaComponent/ChatAreaComponent";
import { NavbarComponent } from "./NavbarComponent/NavbarComponent";
import { SendMessageComponent } from "./SendMessageComponent/SendMessageComponent";

export const MainPage: React.FC = () => {
  const [username, setUsername] = useState("John/Jane Doe");
  const [chatRoom, setChatRoom] = useState("General Chat");
  const [chatRooms, setChatRooms] = useState(["General Chat"]);

  return (
    <StyledContainer>
      <NavbarComponent
        chatRooms={chatRooms}
        setChatRooms={setChatRooms}
        chatRoom={chatRoom}
        setChatRoom={setChatRoom}
        username={username}
        setUsername={setUsername}
      />
      <ChatAreaComponent />
      <SendMessageComponent />
    </StyledContainer>
  );
};

export const StyledContainer = styled(Container)`
  max-width: 750px !important;
`;
