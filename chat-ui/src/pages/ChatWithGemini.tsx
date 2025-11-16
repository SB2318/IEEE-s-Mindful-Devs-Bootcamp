import { useState } from 'react';
import ChatHeader from '../components/ChatHeader';
import ChatBubble from '../components/ChatBubble';
import ChatInput from '../components/ChatInput';
import '../styles/chat.css';

// Typ dla pojedynczej wiadomości
type Message = {
  role: 'user' | 'ai';
  text: string;
};

const ChatWithGemini: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Hello! I am Gemini. How can I help you?' },
    { role: 'user', text: 'Hi, tell me about Gemini.' },
  ]);

  const [inputValue, setInputValue] = useState<string>('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Dodajemy wiadomość użytkownika
    setMessages([...messages, { role: 'user', text: inputValue }]);
    setInputValue('');

    // Opcjonalna odpowiedź AI (placeholder)
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
