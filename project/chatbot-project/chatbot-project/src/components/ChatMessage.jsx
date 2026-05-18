import RobotProFileImage from "../assets/robot.png";
import UserProFileImage from "../assets/user.png";
import LoadingSpinner from "../assets/loading-spinner.svg";
import "./ChatMessage.css";

export function ChatMessage({ message, sender, isLoading }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && <img src={RobotProFileImage} alt="robot" />}

      <div className="chat-message-text">
        {isLoading ? <img src={LoadingSpinner} alt="loading" /> : message}
      </div>
      {sender === "user" && <img src={UserProFileImage} alt="user" />}
    </div>
  );
}
