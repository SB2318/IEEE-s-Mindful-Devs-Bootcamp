import React from "react";
import "../styles/chat.css";

type ChatBubbleProps = {
  text: string;
  role: "user" | "ai";
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, role }) => {
  return <div className={`chat-bubble ${role}`}>{text}</div>;
};

export default ChatBubble;
