import { useDispatch, useSelector } from "react-redux";
import "./style/chatbox.scss";
import { RootState } from "../redux/store";
import { useEffect, useRef, useState } from "react";
import { addMessage, resetMessage } from "../redux/Reducer/chatMessageSlice";

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
      ws.current.onmessage = (event) => {
        console.log("Received WebSocket message:", event.data);
        try {
          const messageData = event.data;
          let senderName
          if (messageData && messageData.trim() !== "") {
            console.log(messageData)
            senderName = event.data.match(userNameRegexinTheMessage)[0];
            console.log("testign running into true condition")
          } else {
            senderName = "anonymus"
            console.log("testign running into falsy condition")

          }
          if (senderName !== userName) {
            const date = new Date();
            const options = { timeZone: 'Europe/Helsinki', hour12: false }; // Set the timezone to Finland (Europe/Helsinki)
            const finalTimeStamp = date.toLocaleTimeString('en-US', options);
            dispatch(addMessage({ id: "1", sender: senderName, content: messageData, timeStamp: finalTimeStamp} ))
          }
        } catch (error) {
          console.error( error);
        }
      };
    }
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [isChatboxMounted, dispatch]);

  const handleDisconnect = () =>{
    if(ws.current){
      ws.current.close();
    }
    dispatch(resetMessage())
  }

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
    // disconnect order 
  };

  const handleSubmitMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (messageInput.trim() !== "") {
      const messageData = messageInput + "/" + userName + "\\";
      console.log("this is userA messages:", messageData)
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
        Live chat ({messages.length})
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
            handleDisconnect()
          }}
        >
          Disconnect
        </button>
      </form>

      {isChatboxMounted && isWarnning ? (
        <div ref={targetElementRef} className="corecenter">
          <div className="conversation__container">
            {messages.map((msg, index) => (
              <div className="message_line" key={index}>
                <p className={msg.sender.replace(userNameRegexName, "") === userName?"conversation_userA":"" }>{msg.timeStamp}</p>
                <p className={msg.sender.replace(userNameRegexName, "") === userName?"conversation_userA":"" }>
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
