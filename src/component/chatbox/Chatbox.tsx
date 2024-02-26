import { useDispatch, useSelector } from "react-redux";
import "./style/chatbox.scss";
// import { apigClientFactory } from "aws-api-gateway-client";
import { RootState } from "../redux/store";
import { useEffect, useRef, useState } from "react";
import { addMessage } from "../redux/Reducer/chatMessageSlice";

export const Chatbox = () => {
  const [isChatboxMounted, setIsChatboxMounted] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [userName, setUsername] = useState("anonymous");
  const [isWarnning, setIsWarning] = useState(false);
  const userNameRegex = /\/.*\\/;
  const targetElementRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const ws = useRef<WebSocket | null>(null);
  // const wsUrl = `wss://6gn1dqvffe.execute-api.us-east-1.amazonaws.com/demo/?userName=${userName}`;
  const wsUrl = "wss://6gn1dqvffe.execute-api.us-east-1.amazonaws.com/demo/";
  const messages = useSelector(
    (state: RootState) => state.chatMessage.messages
  );
  useEffect(() => {
    console.log("chat box is mounted?:", isChatboxMounted);
    if (isChatboxMounted) {
      ws.current = new WebSocket(wsUrl);
      ws.current.onopen = () => {
        console.log("client is connected");
      };
      //   reworking here
      ws.current.onmessage = (event) => {
        console.log("Received WebSocket message:", event.data);

        try {
          const messageData = event.data;
          const senderName = event.data.match(userNameRegex)[0]
          dispatch(
            addMessage({ id: "1", sender: senderName, content: messageData })
          );
        } catch (error) {
          console.error("Error parsing WebSocket message:", error);
        }
      };
      //   reworking ended
    }
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [isChatboxMounted, dispatch]);
  useEffect(() => {
    console.log("Redux state messages:", messages);
  }, [messages]);
  const handleScrollToTarget = () => {
    if (targetElementRef.current) {
      targetElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  const handleToogleChatBox = () => {
    setIsChatboxMounted(!isChatboxMounted);
    handleScrollToTarget();
  };
  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleToogleIdentification = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setIsWarning(true);
    if (isWarnning) {
      setIsChatboxMounted(false);
    } else {
      setIsChatboxMounted(true);
    }
  };

  const handleSubmitMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (messageInput.trim() !== "") {
      const message = {
        action: "sendMessage",
        message: messageInput + "/" + userName + "\\",
      };
      ws.current?.send(JSON.stringify(message));
      setMessageInput("");
    }
  };

  return (
    <div className="chatbox__container">
      <button className="toogleChat__button" onClick={handleToogleChatBox}>
        Live chat
      </button>
      <form onSubmit={handleToogleIdentification}>
        <input
          type="text"
          value={userName}
          onChange={handleNameChange}
          placeholder="Your name..."
        />
        <button
          onClick={() => handleToogleIdentification}
          className="userName_button"
        >
          Connect
        </button>
      </form>

      {isChatboxMounted && isWarnning ? (
        <div ref={targetElementRef} className="corecenter">
          <div className="conversation__container">
            {messages.map((msg, index) => (
              <div key={index}>
                <p>
                  {msg.sender}: {msg.content}
                </p>
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmitMessage}>
            <input
              type="text"
              value={messageInput}
              onChange={handleMessageChange}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
