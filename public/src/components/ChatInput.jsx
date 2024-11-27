import React, { useState, useRef, useEffect } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef(null);
  const emojiButtonRef = useRef(null);

  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.trim().length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  // Close emoji picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        emojiPickerRef.current && 
        !emojiPickerRef.current.contains(event.target) &&
        emojiButtonRef.current && 
        !emojiButtonRef.current.contains(event.target)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <div className="button-container">
        <div className="emoji" ref={emojiButtonRef}>
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && (
            <div ref={emojiPickerRef} className="emoji-picker-wrapper">
              <Picker 
                onEmojiClick={handleEmojiClick} 
                height={350}
                width={300}
              />
            </div>
          )}
        </div>
      </div>
      <form className="input-container" onSubmit={sendChat}>
        <input
          type="text"
          placeholder="Type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          maxLength={500}
        />
        <button type="submit" disabled={msg.trim().length === 0}>
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color: #FFF5E1;
  padding: 0 2rem;
  font-family: 'Inter', 'Poppins', sans-serif;
  position: relative;
  
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
    grid-template-columns: 10% 90%;
  }

  .button-container {
    display: flex;
    align-items: center;
    color: #FF6B35;
    position: relative;

    .emoji {
      position: relative;

      svg {
        font-size: 1.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
        
        &:hover {
          color: #FF8B4D;
          transform: scale(1.1);
        }
      }

      .emoji-picker-wrapper {
        position: absolute;
        top: -360px;
        left: -50%;
        z-index: 10;
        
        @media screen and (max-width: 768px) {
          left: -100%;
        }
      }
    }
  }

  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: white;
    border: 1px solid #FF6B35;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;

    &:focus-within {
      box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.3);
    }

    input {
      flex-grow: 1;
      background-color: transparent;
      color: #333;
      border: none;
      font-size: 1rem;
      font-family: 'Inter', 'Poppins', sans-serif;

      &::placeholder {
        color: #888;
      }

      &::selection {
        background-color: #FF6B35;
        color: white;
      }

      &:focus {
        outline: none;
      }
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #FF6B35;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:disabled {
        background-color: #CCCCCC;
        cursor: not-allowed;
      }

      svg {
        font-size: 1.5rem;
        color: white;
      }

      &:not(:disabled):hover {
        background-color: #FF8B4D;
        transform: scale(1.05);
      }
    }
  }
`;