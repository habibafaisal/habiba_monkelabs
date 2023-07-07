import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, removeMessage } from "../store/action";
import { setLoginStatus } from "../store/action";
import "../styles/ChatRoom.css";

const ChatRoom = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  console.log("user logged in", isLoggedIn);

  const handleLogout = () => {
    // Perform logout logic

    // Dispatch action to update login status
    dispatch(setLoginStatus(false));
  };

  const handleAddMessage = () => {
    const newMessage = {
      id: new Date().getTime(),
      username: "JohnDoe",
      text: input,
      timestamp: new Date().getTime(),
    };
    dispatch(addMessage(newMessage));
    setInput("");
  };

  const handleDeleteMessage = (messageId) => {
    dispatch(removeMessage(messageId));
  };

  return (
    <div className="chat-room">
      <h1 className="chat-room__title">Chat Room</h1>
      <div className="chat-room__messages">
        {messages.map((message) => (
          <div key={message.id} className="chat-room__message">
            <p className="chat-room__message-username">{message.username}</p>
            <p className="chat-room__message-text">{message.text}</p>
            <button
              className="chat-room__message-delete"
              onClick={() => handleDeleteMessage(message.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="chat-room__input-container">
        <input
          className="chat-room__input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter message"
        />
        <button className="chat-room__send-button" onClick={handleAddMessage}>
          Send
        </button>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
