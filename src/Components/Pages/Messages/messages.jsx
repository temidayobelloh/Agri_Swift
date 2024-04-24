import React, { useState, useRef, useEffect } from 'react';
import './messages.css'; // Import CSS file for styling

const Messages = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'user' },
    { id: 2, text: 'Hi there!', sender: 'otherUser' },
    { id: 3, text: 'Your produce was so fresh, surely gonna recommend you to my guys.', sender: 'user' },
    { id: 4, text: 'Hello, thanks! Happy you liked it!', sender: 'otherUser' },
  ]);

  const [lastSeen, setLastSeen] = useState('2 minutes ago');
  const [newMessage, setNewMessage] = useState('');
  const messageInputRef = useRef(null);

  useEffect(() => {
    // Update last seen status every 5 seconds
    const interval = setInterval(() => {
      setLastSeen(getLastSeen());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getLastSeen = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  };

  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    const newMessages = [...messages, { id: messages.length + 1, text: newMessage, sender: 'user' }];
    setMessages(newMessages);
    setNewMessage('');
  
    messageInputRef.current.focus();
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const renderMessages = () => {
    return messages.map(message => (
      <div key={message.id} className={`message ${message.sender === 'user' ? 'sent' : 'received'}`}>
        {message.text}
      </div>
    ));
  };

  return (
    <div className='product-listing-container'> {/* Container added */}
      <div className='product-nav-wrapper'>
        <div className='product-title-wrapper'>
          <p className='product-title'> Messages </p>
          <p className='product-title-sub'>Total chats: 1</p>
        </div>
      </div>
      <div className="message-chat-container">
        <div className="message-header">
          <span>Last seen: {lastSeen}</span>
        </div>
        <div className="message-body">
          {renderMessages()}
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={handleInputChange}
            ref={messageInputRef}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Messages;
