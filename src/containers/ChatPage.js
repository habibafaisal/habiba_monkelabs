import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, removeMessage } from "../store/action";
import { setLoginStatus } from "../store/action";
import "../styles/ChatPage.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messages);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [input, setInput] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  console.log("user logged in", isLoggedIn);

  const handleLogout = () => {
    dispatch(setLoginStatus(false));
    console.log("user logged in check here", isLoggedIn);
    navigate("/");
  };
  const generateRandomMessage = () => {
    const randomId = new Date().getTime();
    const randomUsername = "Chatbot";
    const randomText =
      "Thanks for contacting, we will get in touch with you soon.";
    const randomTimestamp = new Date().getTime();

    return {
      id: randomId,
      username: randomUsername,
      text: randomText,
      timestamp: randomTimestamp,
    };
  };

  const handleAddMessage = () => {
    const newMessage = {
      id: new Date().getTime(),
      username: "Habiba Faisal",
      text: input,
      timestamp: new Date().getTime(),
      //   timestamp: new Date().getTime(),
    };
    dispatch(addMessage(newMessage));
    console.log(input);
    // console.log("time:", new Date().getTime());
    setInput("");

    const randomMessage = generateRandomMessage();
    dispatch(addMessage(randomMessage));
  };

  const handleDeleteMessage = (messageId) => {
    dispatch(removeMessage(messageId));
  };

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours}:${minutes}:${seconds}`;
  };
  // Static chat data

  return (
    <div className="full-page-container">
      <div className="header">Chat Application For Monke Labs</div>
      {/* nav links */}
      {/* <div className="topnav">
        <a href="#" className=".topnav a">
          Link
        </a>
      </div> */}
      {/* <NavLink className=".topnav a">hii</NavLink> */}

      {/* FOR COLUMNS */}
      <div className="column-container">
        <div className="column-side">
          <h1 className="text-side">Hello, let's chat up!</h1>
        </div>
        <div className="column-middle">
          <h1 className="text-middle">Chats</h1>
          {messages.map((chat) => (
            <div key={chat.id} className="chat">
              <span className="chat-user">{chat.username} </span>
              {/* <span className="chat-user">{chat.timestamp} </span> */}
              <span className="chat-message">{chat.text}</span>

              <button
                className="create-chat"
                onClick={() => handleDeleteMessage(chat.id)}
              >
                Delete
              </button>
            </div>
          ))}
          <input
            className="chat-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter message"
          />
          <button className="create-chat" onClick={handleAddMessage}>
            Create New Chat
          </button>
        </div>
        <div className="column-right">
          <h1 className="text-right">Time {formatTime(currentTime)}</h1>
          <button className="logout-chat" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      {/* column end */}
      {/* to display chats */}
      {/* button to create new chat */}
      {/* <button onClick={handleAddMessage}>Create New Chat</button> */}
    </div>
  );
};

export default ChatPage;
