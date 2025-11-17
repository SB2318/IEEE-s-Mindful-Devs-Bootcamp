import React from 'react';
import '../styles/chat.css';

type ChatInputProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  onSend: () => void;
};

const ChatInput: React.FC<ChatInputProps> = ({ inputValue, setInputValue, onSend }) => {
  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Enter your message…"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onSend}>🎤</button>
    </div>
  );
};

export default ChatInput;
