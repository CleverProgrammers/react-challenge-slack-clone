import React from 'react'
import styled from 'styled-components'


const ChatMessage = ({ text, image, timeStamp, name }) => {
  console.log(name);
  return (
    <Container>
      <UserAvatar>
        <img src={image} alt="" />
      </UserAvatar>
      <MessageContent>
        <Name>
          {name&& name}
          <span>{new Date(timeStamp.toDate()).toUTCString()}</span>
        </Name>
        <Text>{text}</Text>
      </MessageContent>
    </Container>
  );
}

export default ChatMessage
  
const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
`

const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 2px;
  overflow: hidden;
  margin-right:8px;
  img {
    width: 100%
  }
`
const MessageContent = styled.div`
  display: flex;
  flex-direction: column
`
const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;
  span{
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97,96,97);
    font-size: 13px;
  }

`

const Text = styled.span`

`