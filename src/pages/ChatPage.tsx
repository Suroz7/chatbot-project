import { useState, useEffect } from "react";
import { getChatResponse } from "../ai/huggingface";
import "../assets/chatpage.css";
import logo from "../assets/asd2.png";  

interface Message {
    text: string;
    sender: 'user' | 'ai';
}

const ChatPage = () => {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const handleGenerate = async () => {
        if (!input) return;
        
        // Add user message
        const userMessage: Message = { text: input, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        
        // Get AI response
        const result = await getChatResponse(input);
        
        // Add AI message
        const aiMessage: Message = { text: result || "Sorry, I couldn't process that.", sender: 'ai' };
        setMessages(prev => [...prev, aiMessage]);
        
        // Clear input
        setInput("");
    };

    if (loading) {
        return (
            <div className="intro-container">
                <h1 className="intro-text">Welcome to Chat Generation</h1>
                <img src={logo} alt="Chat Logo" className="intro-logo" />
            </div>
        );
    }

    return (
        <div className="chat-container">
            <div className="chat-title-container">
                <h1 className="chat-title">Chat with AI</h1>
            </div>
            <div className="chat-box">
                <div className="chat-content">
                    {messages.map((message, index) => (
                        <div 
                            key={index} 
                            className={`message-container ${message.sender}-message`}
                        >
                            <div className="message-bubble">
                                {message.sender === 'ai' && <small>Model: DeepSeek-R1</small>}
                                <div className="message-text">{message.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="chat-input-container">
                    <input 
                        type="text" 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleGenerate()}
                        placeholder="Type your message..."
                        className="chat-input"
                    />
                    <button onClick={handleGenerate} className="chat-button">Send</button>
                </div>
            </div>
        </div>
    );
};

export default ChatPage;
