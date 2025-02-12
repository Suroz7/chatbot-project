import { useState, useEffect } from "react";
import { getChatResponse } from "../ai/huggingface";
import "../assets/chatpage.css";

const ChatPage = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    const handleGenerate = async () => {
        if (!input) return;
        const result = await getChatResponse(input);
        setResponse(result || "");
    };

    if (loading) {
        return (
            <div className="intro-container">
                <h1 className="intro-text">Welcome to Chat Generation</h1>
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
                    {response && (
                        <div className="chat-response-container">
                            <small>Model: DeepSeek-R1</small>
                            <div className="chat-response">{response}</div>
                        </div>
                    )}
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
