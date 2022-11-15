import { InputWrapper } from "./InputWrapper";
import { StyledInput } from "./StyledInput";
import { StyledSend } from "./StyledSend";

export const SendMessageComponent: React.FC = () => {
  return (
    <div className="fixed-bottom d-flex justify-content-center mb-3">
      <InputWrapper>
        <StyledInput type="text" />
        <StyledSend size={25}></StyledSend>
      </InputWrapper>
    </div>
  );
};
