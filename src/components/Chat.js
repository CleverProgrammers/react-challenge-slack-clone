import React from 'react'
import ChatHeader from './ChatHeader'
import styled from 'styled-components'
import ChatInput from './ChatInput'
import MessageContainer from './MessageContainer'
import ChatMessage from './ChatMessage'

function Chat() {
    return (
        <Container>
           <ChatHeader />
           <MessageContainer>
            <ChatMessage />
           </MessageContainer>
           <ChatInput />
        </Container>
    )
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
`

