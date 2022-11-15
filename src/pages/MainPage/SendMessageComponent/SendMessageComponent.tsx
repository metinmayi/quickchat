import styled from "styled-components";
import { InputWrapper } from "./InputWrapper";
import { StyledInput } from "./StyledInput";
import { StyledSend } from "./StyledSend";

export const SendMessageComponent: React.FC = () => {
  return (
    <StyledWrapper className="fixed-bottom d-flex justify-content-center mb-3">
      <InputWrapper>
        <StyledInput type="text" />
        <StyledSend size={25}></StyledSend>
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
  max-width: 500px;
`;
