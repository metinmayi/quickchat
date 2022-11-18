import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { socket } from "../../App";
import { ChatAreaComponent } from "./ChatAreaComponent/ChatAreaComponent";
import { NavbarComponent } from "./NavbarComponent/NavbarComponent";
import { SendMessageComponent } from "./SendMessageComponent/SendMessageComponent";

interface Message {
  username: string;
  message: string;
}
export const MainPage: React.FC = () => {
  const [username, setUsername] = useState("John/Jane Doe");
  const [chatRoom, setChatRoom] = useState("General Chat");
  const [chatRooms, setChatRooms] = useState(["General Chat"]);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on("broadcastMessage", (socket) => {
      const newMessage = {
        username: socket.username as string,
        message: socket.message as string,
      };
      setMessages([...messages, newMessage]);
    });
  });

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
      {messages.map((message) => (
        <ChatAreaComponent
          username={message.username}
          message={message.message}
          key={message.message}
        />
      ))}
      <SendMessageComponent username={username} chatRoom={chatRoom} />
    </StyledContainer>
  );
};

export const StyledContainer = styled(Container)`
  max-width: 750px !important;
  & > .row:nth-child(2) {
    margin-top: 12vh;
  }
`;
