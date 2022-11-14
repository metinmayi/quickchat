import { Wechat } from "react-bootstrap-icons";
import { StyledH4 } from "./StyledH4";

export const Logo: React.FC = () => {
  return (
    <div className="d-flex align-items-center gap-1">
      <Wechat size={30} color="#8E252C" />
      <StyledH4>QuickChat</StyledH4>
    </div>
  );
};
