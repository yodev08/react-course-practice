import { useEffect, useState } from "react";
import { Chatbot } from "supersimpledev";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

const STORAGE_KEY = "messages";

function App() {
  const [chatMessages, setChatMessages] = useState(() => {
    const savedMessages = localStorage.getItem(STORAGE_KEY);

    try {
      return JSON.parse(savedMessages) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    Chatbot.addResponses({
      "what is your name": "I'm your custom chatbot.",
      "who made you": "I was built inside this React project.",
      "what can you do": "I can chat, remember messages, and show timestamps.",
    });
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chatMessages));
  }, [chatMessages]);

  function clearMessages() {
    setChatMessages([]);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  }

  return (
    <div className="app-container">
      {chatMessages.length === 0 ? (
        <div className="empty-state-container">welcome</div>
      ) : (
        <ChatMessages chatMessages={chatMessages} />
      )}
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
        onClear={clearMessages}
      />
    </div>
  );
}
export default App;
