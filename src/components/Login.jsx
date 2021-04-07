import React, { useState } from 'react'
import ChatHeader from "./ChatHeader";
import styled from 'styled-components'
import { auth, provider } from '../firebase'


function Login({ setUser }) {


  const signIn = () => {
    auth.signInWithPopup(provider)
    .then((res) => {
      const newUser = {
        name: res.user.displayName,
        photo: res.user.photoURL,
      }
      localStorage.setItem('user', JSON.stringify(newUser))
      setUser(newUser)
    })
    .catch(err => {
      console.log("Err", err.message)
    })
  }

    return (
      <Container>
        {/* <ChatHeader /> */}
        <Content>
          <SlackImage src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png" />
          <h1>Sign in Slack</h1>
          <SignInButton onClick={signIn}>
            Sign In With Google
          </SignInButton>
        </Content>
      </Container>
    );
}

export default Login

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #f8f8f8;
display: flex;
justify-content: center;
align-items: center;

`
const Content = styled.div`
  background: white;
  padding: 100px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb( 0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SlackImage = styled.img`
  height: 100px;

`

const SignInButton = styled.button`
  margin-top: 50px;
  background: #0a8d48;
  color: white;
  border: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`

