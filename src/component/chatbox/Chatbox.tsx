import { useDispatch, useSelector } from "react-redux";
import "./style/chatbox.scss";
import { RootState } from "../redux/store";
import { useEffect, useRef, useState } from "react";
import { addMessageForUserA } from "../redux/Reducer/chatMessageSliceForUserA";
import { addMessageForUserB } from "../redux/Reducer/chatMessageSliceForUserB";

export const Chatbox = () => {
  const [isChatboxMounted, setIsChatboxMounted] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [userName, setUsername] = useState<string>("anonymous");
  const [isWarnning, setIsWarning] = useState(false);
  const userNameRegexinTheMessage = /\/.*\\/;
  const userNameRegexName = /\/|\\/g;
  const targetElementRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const ws = useRef<WebSocket | null>(null);
  const wsUrl = "wss://6gn1dqvffe.execute-api.us-east-1.amazonaws.com/demo/";
  const messagesUserA = useSelector(
    (state: RootState) => state.chatMessageUserA.messages
  );
  const messagesUserB = useSelector(
    (state: RootState) => state.chatMessageUserB.messages
  );
  useEffect(() => {
    console.log("chat box is mounted?:", isChatboxMounted);
    if (isChatboxMounted) {
      ws.current = new WebSocket(wsUrl);
      ws.current.onopen = () => {
        console.log("client is connected");
      };
      ws.current.onmessage = (event) => {
        console.log("Received WebSocket message:", event.data);
        try {
          const messageData = event.data;
          const senderName = event.data.match(userNameRegexinTheMessage)[0];
          if(senderName !== userName){
            dispatch(addMessageForUserB({id:"1",sender:senderName,content:messageData}))
          }
        } catch (error) {
          console.error("Error parsing WebSocket message:", error);
        }
      };
    }
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [isChatboxMounted, dispatch,messagesUserA,messagesUserB]);

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
    setIsWarning(!isWarnning);
    setIsChatboxMounted(!isWarnning);
  };

  const handleSubmitMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (messageInput.trim() !== "") {
      const messageData = messageInput + "/" + userName + "\\";
      dispatch(addMessageForUserA({ id: "1", sender: userName, content: messageData }));
      const message = {
        action: "sendMessage",
        message: messageData,
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
      <form
        className="identificationForm"
        onSubmit={handleToogleIdentification}
      >
        <input
          type="text"
          value={userName}
          onChange={handleNameChange}
          placeholder="Your name..."
          disabled={isWarnning ? true : false}
        />
        <button
          onClick={() => handleToogleIdentification}
          className="userName_button"
          disabled={isWarnning ? true : false}
        >
          Connect
        </button>
        <button
          disabled={isWarnning ? false : true}
          onClick={() => {
            handleToogleIdentification;
          }}
        >
          Disconnect
        </button>
      </form>

      {isChatboxMounted && isWarnning ? (
        <div ref={targetElementRef} className="corecenter">
          <div className="conversationUserA__container">
            {messagesUserA.map((msg, index) => (
              <div key={index}>
                <p>
                  {msg.sender.replace(userNameRegexName, "")}:{" "}
                  {msg.content.replace(userNameRegexinTheMessage, "")}
                </p>
              </div>
            ))}
          </div>
          <p>this is senderB</p>
          <div className="conversationUserB__container">
            {messagesUserB.map((msg, index) => (
              <div key={index}>
                <p>
                  {msg.sender.replace(userNameRegexName, "")}:{" "}
                  {msg.content.replace(userNameRegexinTheMessage, "")}
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
