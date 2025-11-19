import React from "react";
import "../styles/chat.css";
import MicIcon from "../assets/mic_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"; // <--- import

type ChatInputProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  onSend: () => void;
};

const ChatInput: React.FC<ChatInputProps> = ({ inputValue, setInputValue }) => {
  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Enter your message…"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <img src={MicIcon} alt="mic" className="mic-icon" />
    </div>
  );
};

export default ChatInput;
