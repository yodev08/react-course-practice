import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages, onClear }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    const trimmedInputText = inputText.trim();

    if (!trimmedInputText) {
      return;
    }

    const newChatMessages = [
      ...chatMessages,
      {
        message: trimmedInputText,
        sender: "user",
        id: crypto.randomUUID(),
        time: Date.now(),
      },
    ];

    setChatMessages([
      ...newChatMessages,
      {
        message: "",
        sender: "robot",
        id: crypto.randomUUID(),
        isLoading: true,
        time: Date.now(),
      },
    ]);

    const response = await Chatbot.getResponseAsync(trimmedInputText);

    setChatMessages([
      ...newChatMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
        time: Date.now(),
      },
    ]);

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
      <button className="clear-button" onClick={onClear}>
        Clear
      </button>
    </div>
  );
}
