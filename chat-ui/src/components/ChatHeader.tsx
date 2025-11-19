import "../styles/chat.css";
import GeminiIcon from "../assets/smart_toy_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg"; // <-- import SVG

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <img src={GeminiIcon} className="gemini-logo" alt="Gemini logo" />
      <span className="gemini-text">Gemini</span>
    </div>
  );
};

export default ChatHeader;
