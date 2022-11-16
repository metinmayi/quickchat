import { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { ChatAreaComponent } from "./ChatAreaComponent/ChatAreaComponent";
import { NavbarComponent } from "./NavbarComponent/NavbarComponent";
import { SendMessageComponent } from "./SendMessageComponent/SendMessageComponent";

export const MainPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [chatRoom, setChatRoom] = useState("");
  const [chatRooms, setChatRooms] = useState("");

  return (
    <StyledContainer>
      <NavbarComponent />
      <ChatAreaComponent />
      <SendMessageComponent />
    </StyledContainer>
  );
};

export const StyledContainer = styled(Container)`
  max-width: 750px !important;
`;
