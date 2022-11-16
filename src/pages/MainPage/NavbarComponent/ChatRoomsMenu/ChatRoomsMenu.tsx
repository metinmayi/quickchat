import React from "react";
import { Col, Row } from "react-bootstrap";

interface Props {
  chatRooms: string[];
  chatRoom: string;
  setChatRooms: React.Dispatch<React.SetStateAction<string[]>>;
  setChatRoom: React.Dispatch<React.SetStateAction<string>>;
}
export const ChatRoomsMenu: React.FC<Props> = ({
  chatRooms,
  chatRoom,
  setChatRooms,
  setChatRoom,
}) => {
  function swapOrCreateRoom(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.currentTarget.value === "create") {
      createRoom();
      return;
    }
    setChatRoom(e.currentTarget.value);
  }

  function createRoom() {
    const name = prompt("What would you like to name the chat room?");
    if (!name) return;
    const newChatRooms = [...chatRooms, name];
    setChatRooms(newChatRooms);
    setChatRoom(name);
  }
  return (
    <Row>
      <Col>
        <h6 className="m-0">Chat Rooms:</h6>
        <select value={chatRoom} onChange={(e) => swapOrCreateRoom(e)}>
          {chatRooms.map((room) => (
            <option value={room} key={room}>
              {room}
            </option>
          ))}
          <option value="create">Create new...</option>
        </select>
      </Col>
    </Row>
  );
};
