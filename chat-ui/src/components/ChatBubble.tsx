import React from 'react';
import '../styles/chat.css';

// Typ propsów
type ChatBubbleProps = {
  text: string;
  role: 'user' | 'ai'; // ograniczamy do dwóch możliwych wartości
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ text, role }) => {
  return (
    <div className={`chat-bubble ${role}`}>
      {text}
    </div>
  );
};

export default ChatBubble;
