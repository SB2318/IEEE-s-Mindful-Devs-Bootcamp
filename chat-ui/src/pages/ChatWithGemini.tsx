import { useState } from 'react';
import ChatHeader from '../components/ChatHeader';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';
import '../styles/chat.css';

type Message = {
  role: 'user' | 'ai';
  text: string;
};

const ChatWithGemini: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
  { role: 'ai', text: 'Hello! I am Gemini. How can I help you today?' },
  { role: 'user', text: 'Hi! What can you do?' },

  { role: 'ai', text: 'I can help with answers, ideas, explanations, and more!' },
  { role: 'user', text: 'Nice. Can you tell me something interesting?' },

  { role: 'ai', text: 'Sure! Did you know that octopuses have three hearts and blue blood?' },
  { role: 'user', text: 'Wow, that’s cool!' },

  { role: 'ai', text: 'Yes! They’re fascinating creatures.' },
  { role: 'user', text: 'Tell me more facts.' },

  { role: 'ai', text: 'Honey never spoils — archaeologists found 3000-year-old edible honey.' },
  { role: 'user', text: 'Seriously? That’s amazing.' },

  { role: 'ai', text: 'Absolutely.' },
]);


  const [inputValue, setInputValue] = useState<string>('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages([...messages, { role: 'user', text: inputValue }]);
    setInputValue('');

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { role: 'ai', text: 'This is a placeholder reply from Gemini.' }
      ]);
    }, 500);
  };

  return (
    <div className="chat-container">
      <ChatHeader />
      <div className="chat-area">
        {messages.map((msg, idx) => (
          <ChatBubble key={idx} role={msg.role} text={msg.text} />
        ))}
      </div>
      <ChatInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSend={handleSend}
      />
    </div>
  );
};

export default ChatWithGemini;
