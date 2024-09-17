"use client";
import { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import styles from '@/app/components/Chatbot/chatbot.module.css'; // Import the CSS module for styling

Modal.setAppElement('#__next'); // Ensure accessibility for Modal

const ChatComponent = () => {
  const [message, setMessage] = useState('');  // User's message
  const [response, setResponse] = useState(''); // Chatbot's response
  const [modalIsOpen, setModalIsOpen] = useState(false);  // Control modal visibility

  // Handle the user message submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://192.168.29.123:8501', { message });
      setResponse(res.data.response); // Assuming API returns 'response' field
      setMessage(''); // Clear the input after successful submission
    } catch (error) {
      console.error('Error fetching chatbot response:', error);
      setResponse("There was an error. Please try again later."); // Fallback error message
    }
  };

  // Open and close modal handlers
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <>
      {/* Chat Icon Button */}
      <div className={styles.chatIcon} onClick={openModal}>
        <FontAwesomeIcon icon={faCommentDots} size="2x" color="#fff" />
      </div>

      {/* Chatbot Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
        contentLabel="Chatbot Modal"
      >
        <h2 className="text-xl font-bold mb-4">Chat with LegalMitra AI</h2>
        
        {/* Chatbot response */}
        <div className="mb-4">
          {response && <p className="text-gray-800">{response}</p>}
        </div>
        
        {/* Chat message input */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <input
            className="p-2 border border-gray-300 rounded bg-gray-100"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            type="text"
            required
          />
          <button className="bg-primary text-white p-2 rounded" type="submit">
            Send
          </button>
        </form>

        {/* Close button */}
        <button onClick={closeModal} className="mt-4 bg-gray-200 p-2 rounded">
          Close
        </button>
      </Modal>
    </>
  );
};

export default ChatComponent;
