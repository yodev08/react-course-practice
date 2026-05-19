import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages([
      ...newChatMessages,
      {
        message: "../assets/loading-spinner.svg",
        sender: "robot",
        id: crypto.randomUUID(),
        isLoading: true,
      },
    ]);

    setTimeout(() => {
      const response = Chatbot.getResponse(inputText);

      setChatMessages([
        ...newChatMessages,
        {
          message: response,
          sender: "robot",
          id: crypto.randomUUID(),
        },
      ]);
    }, 1000);
    setInputText("");
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="send a message to chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            sendMessage();
          } else if (event.key === "Escape") {
            setInputText("");
          }
        }}
      />
      <button className="send-button" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
}
