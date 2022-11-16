import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import avatar from "../../../assets/images/avatar.jpg";

export const ChatAreaComponent: React.FC = () => {
  return (
    <StyledRow className="d-flex justify-content-center">
      <Col xs={2}>
        {/* <StyledAvatar> */}
        <StyledImage src={avatar} />
        {/* </StyledAvatar> */}
      </Col>
      <Col xs={8}>
        <Row>
          <StyledParagraph>Metin</StyledParagraph>
        </Row>
        <Row>
          <StyledChatBubble>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            voluptatem voluptatum qui explicabo quia aliquid deserunt a fugiat,
            dolor eaque velit sequi, possimus atque quis in veritatis recusandae
            culpa aspernatur.
          </StyledChatBubble>
        </Row>
      </Col>
    </StyledRow>
  );
};

export const StyledParagraph = styled.p`
  margin: 0;
  font-weight: 600;
`;

export const StyledRow = styled(Row)`
  margin-top: 12vh;
`;

export const StyledWrapper = styled.div`
  margin-top: 15vh;
  display: flex;
`;

export const StyledAvatar = styled.div``;

export const StyledImage = styled.img`
  height: 20%;
  border-radius: 55px;
  border: 1px solid gray;
`;

export const StyledNameAndMessage = styled.div``;

export const StyledChatBubble = styled.div`
  border-radius: 30px;
  padding: 6% 4%;
  background-color: white;
`;
