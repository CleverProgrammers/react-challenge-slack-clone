import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const ChatHeader = () => {
  return (
    <Container>
      <TopRow>
        <ChanInfo>
          <p># clever</p>
          <StarBorderIcon />
        </ChanInfo>
        <Details>
          <p>Details</p>
          <InfoOutlinedIcon />
        </Details>
      </TopRow>
      <BottomRow>
        <p>Company-wide announcements and work-based matters</p>
      </BottomRow>
    </Container>
  );
}

export default ChatHeader


const Container = styled.div`
  height: 50px;
  /* display:flex; */
  border-bottom: 1px solid #dbdbdb;
  
`;

const TopRow = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top:10px

`

const ChanInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  margin-left: 10px;
  /* letter-spacing: 0.1px; */
  p {
    font-weight: 700;
  }
  svg {
    font-size: 1rem;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: #9e9e9e;
  /* background-color: white */
  p {
    margin-right: 5px;
  }
`;

const BottomRow = styled.div`
  font-size: 0.8rem;
  color: #9e9e9e;
  p {
    margin-left: 10px
  }
`;