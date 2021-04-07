import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import styled from 'styled-components'
import ChatInput from './ChatInput'
import MessageContainer from './MessageContainer'
import ChatMessage from './ChatMessage'
import db from '../firebase'
import { useParams } from 'react-router'
import firebase from 'firebase'


function Chat({ user }) {
    const [channel, setChannel] = useState()
    const [messages, setMessages] = useState([])
    let { channelId } = useParams()

    const getChannel = () => {
        db.collection('rooms').doc(channelId).onSnapshot((snapShot) => {
            setChannel(snapShot.data())
        })
    }
    useEffect(() => {
      getChannel();
      getMessages()
    }, [channelId]);

    const getMessages = () => {
        db.collection("rooms").doc(channelId).collection('messages').orderBy('timeStamp', 'asc')
        .onSnapshot((snap => {
            let messages = snap.docs.map((doc) => doc.data())
            console.log(messages);
            setMessages(messages);
        }))
    }
    // console.log('F', firebase.firestore)

    const sendMessage = (text) => {
        if(channelId) {
            let payload = {
              text: text,
              timeStamp: firebase.firestore.Timestamp.now(),
              user: user.name,
              userImage: user.photo,
            };
            db.collection('rooms').doc(channelId).collection('messages').add(payload)
            console.log(payload);
        }
    }


    return (
      <Container>
        <ChatHeader channel={channel} />
        <MessageContainer>
            {
                messages.length > 0 &&
                messages.map((data, index) => (
                    
                    <ChatMessage 
                        text={data.text}
                        name={data.user}
                        image={data.userImage}
                        timeStamp={data.timeStamp}
                    />

                ))
            }
        </MessageContainer>
        <ChatInput sendMessage={sendMessage}/>
      </Container>
    );
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
    min-height: 0;
`

