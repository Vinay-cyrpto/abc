import React, { useState } from "react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

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
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
    }
  };

  return (
    <Container>
      <div className="button-container">
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="Type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color: #FFF5E1;
  padding: 0 2rem;
  font-family: 'Poppins', sans-serif;

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }

  .button-container {
    display: flex;
    align-items: center;
    color: #FF6B35;
    gap: 1rem;

    .emoji {
      position: relative;

      svg {
        font-size: 1.5rem;
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
          color: #FF8B4D;
        }
      }

      .emoji-picker-react {
        position: absolute;
        top: -350px;
        background-color: white;
        box-shadow: 0 5px 10px rgba(255, 107, 53, 0.2);
        border: 1px solid #FF6B35;
        border-radius: 10px;

        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #FFF5E1;
          width: 5px;

          &-thumb {
            background-color: #FF6B35;
            border-radius: 10px;
          }
        }
      }
    }
  }

  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    background-color: white;
    border: 1px solid #FF6B35;
    padding: 0.5rem 1rem;

    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: #333;
      border: none;
      font-size: 1.2rem;
      font-family: 'Poppins', sans-serif;

      &::selection {
        background-color: #FF6B35;
        color: white;
      }

      &:focus {
        outline: none;
      }
    }

    button {
      padding: 0.3rem 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #FF6B35;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;

      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }

      svg {
        font-size: 2rem;
        color: white;
      }

      &:hover {
        background-color: #FF8B4D;
        transform: translateY(-2px);
      }
    }
  }
`;