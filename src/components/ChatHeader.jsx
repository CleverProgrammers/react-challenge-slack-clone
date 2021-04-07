import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const ChatHeader = ({ channel }) => {

  return (
    <>
      <Header>
        <Channel>
          <ChannelName>
            # {
              channel&& channel.name 
            }
            </ChannelName>
          {/* <StarBorderIcon /> */}
          <ChannelInfo>
            Company-wide announcements and work-based matters
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>
            Details
          </div>
          <Info />
        </ChannelDetails>
      </Header>
    </>
  );
}

export default ChatHeader


const Container = styled.div`
  /* height: 50px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 10px; */
  
`;

const Header = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(83, 39, 83, 0.13);
  justify-content: space-between;
`;

const Channel = styled.div`
  
`;

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  color:#606060;

`;

const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-size: 13px;
  margin-top: 8px;
`;

const ChannelName = styled.div`
  font-weight: 700
`
const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`