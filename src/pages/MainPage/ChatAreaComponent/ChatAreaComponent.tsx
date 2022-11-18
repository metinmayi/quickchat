import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import avatar from "../../../assets/images/avatar.jpg";
import { StyledChatBubble } from "./StyledChatBubble";
import { StyledImage } from "./StyledImage";
import { StyledParagraph } from "./StyledParagraph";

interface Props {
  username: string;
  message: string;
  sender: string;
}
export const ChatAreaComponent: React.FC<Props> = ({
  username,
  message,
  sender,
}) => {
  const senderIsMe = username === sender;
  return (
    <Row className="d-flex justify-content-center">
      <Col xs={8}>
        <Row>
          <StyledParagraph>{senderIsMe ? "Me" : sender}</StyledParagraph>
        </Row>
        <Row>
          <StyledChatBubble>{message}</StyledChatBubble>
        </Row>
      </Col>
      <Col xs={2}>
        <StyledImage src={avatar} />
      </Col>
    </Row>
  );
};
