import React from 'react'
import styled from 'styled-components'
import { StarBorderOutlined, InfoOutlined } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { selectRoomId } from '../features/appSlice'
import ChatInput from './ChatInput'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import Message from '../components/Message'

function Chat() {
    const roomId = useSelector(selectRoomId);
    const [roomDetails] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
    )
    const [roomMessages] = useCollection(
        roomId &&
         db
            .collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy("timestamp","asc")
    )
   

    return (
        <ChatContainer>
          <Header>
              <HeaderLeft>
                <h4>
                    <strong>#{roomDetails?.data().name}</strong>
                </h4>
                <StarBorderOutlined />
              </HeaderLeft>
              <HeaderRight>
                  <p>
                      <InfoOutlined /> Details
                  </p>
              </HeaderRight>
          </Header>

          <ChatMessages>
              {roomMessages?.docs.map((doc) => {
                  const { message, timestamp, user, userImage } = doc.data();

                  return (
                      <Message 
                        key={doc.id}
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage} 
                        />
                  )
              })}
          </ChatMessages>

          <ChatInput 
          channelName={roomDetails?.data().name}
          channelId={roomId}
          />

        </ChatContainer>
    )
}

export default Chat

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

const ChatMessages = styled.div`

`;

const HeaderLeft = styled.div`
        display: flex;
        align-items: center;
    
    > h4 {
        display: flex;
        text-transform: lowercase;
        margin-right: 10px;
    }

    > h4 > .MuiSvgIcon-root {
        margin-left: 10px;
        font-size: 18px;
    }
`;

const HeaderRight = styled.div`

`;

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 40px;
`;