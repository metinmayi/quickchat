import { useEffect, useState } from "react";
import styled from "styled-components";
import { socket } from "../../../App";
import { InputWrapper } from "./InputWrapper";
import { StyledInput } from "./StyledInput";
import { StyledSend } from "./StyledSend";

interface Props {
  username: string;
  chatRoom: string;
}
export const SendMessageComponent: React.FC<Props> = ({
  username,
  chatRoom,
}) => {
  const [message, setMessage] = useState("");
  function sendMessage() {
    socket.emit("sendMessage", { message, username, chatRoom });
  }
  return (
    <StyledWrapper className="fixed-bottom d-flex justify-content-center mb-3">
      <InputWrapper>
        <StyledInput
          type="text"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
        <StyledSend size={25} onClick={sendMessage}></StyledSend>
      </InputWrapper>
    </StyledWrapper>
  );
};

export const StyledWrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 2vh;
  margin: auto;
  max-width: 750px;
`;
