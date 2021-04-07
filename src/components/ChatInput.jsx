import React, { useState } from 'react'
import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

const ChatInput = ({ sendMessage }) => {
  const [input, setInput] = useState('')


  const send = (e) => {
    e.preventDefault()
    if(!input) return 
    sendMessage(input)
    setInput('')
  }


  return (
    <Container>
      <InputContainer>
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Message here..." />
          <SendButton type='submit' onClick={send}>
            <SendIcon />
          </SendButton>
        </form>
      </InputContainer>
    </Container>
  );
}

export default ChatInput

const Container = styled.div`
  padding: 0 20px 24px 20px;
`

const InputContainer = styled.div`
  border: 1px solid #8d8d8e;
  border-radius: 4px;

  form {
    display: flex;
    height: 42px;
    align-items: center;
    padding-left: 10px;

    input{
      flex: 1;
      border: none;
      font-size: 13px;
      outline: none;
    }
    /* input:focus {
      outline:none
    } */
  }
`;

const SendButton = styled.button`
  background: #007a5a;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #D9D9D9;
  margin-right: 5px;
  cursor: pointer;
  border: none;

  .MuiSvgIcon-root {
    width: 18px;
  }
  :hover {
    background: #148567;
  }
`;