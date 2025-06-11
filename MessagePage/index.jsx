import { useEffect, useRef, useState } from "react";
import { styles } from "./Style";
import { useParams } from "react-router-dom";

export const MessagePage = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const textareaRef = useRef    (null);
  const { username } = useParams();

  const handleSubmit = () => {
    if (message.trim()) {
      setIsLoading(true);
      try {
        fetch(`https://safewhisper.onrender.com/api/send/${username}?content=${message}`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            }
        });
        setMessage('');
        setIsLoading(false);
        setTimeout(() => {
          setIsSent(true);
          setTimeout(() => {
            setIsSent(false);
          }, 3000); // Reset after 3 seconds
        });
        return;
      } catch (error) {
        console.error('Error sending message:', error);
        setIsLoading(false);
        return;
        
      }
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.max(200, textareaRef.current.scrollHeight) + 'px';
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '200px';
    }
  }, []);

  const getButtonContent = () => {
        if (isLoading) return '⏳ Sending...';
        if (isSent) return '✅ Message Sent!';
        return (
            <>
                ✈️ Send Message to <b>{username.toUpperCase()}</b>
            </>
        );
    };

  return (
    <div style={styles.body}>
      <div style={styles.messageContainer}>
        <h1 style={styles.title}>Your Message</h1>
        
        <div>
          <textarea 
            ref={textareaRef}
            style={styles.messageInput}
            placeholder="Type your anonymous message here..."
            value={message}
            onChange={handleMessageChange}
          />
          
          <button 
            onClick={handleSubmit}
            style={{
              ...styles.sendButton,
              ...(isLoading || isSent ? styles.sendButtonDisabled : {})
            }}
            disabled={isLoading || isSent}
          >
            {getButtonContent()}
          </button>
        </div>

        <div style={styles.privacyFeatures}>
          <div style={styles.privacyItem}>
            <div style={{ ...styles.privacyIcon, ...styles.shieldIcon }}>🛡️</div>
            <span>Your message will be sent anonymously</span>
          </div>
          <div style={styles.privacyItem}>
            <div style={{ ...styles.privacyIcon, ...styles.lockIcon }}>🔒</div>
            <span>End-to-end encrypted for your privacy</span>
          </div>
        </div>
      </div>
    </div>
  );
};
