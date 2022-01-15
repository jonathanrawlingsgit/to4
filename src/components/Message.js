import React from 'react'
import styled from 'styled-components'
import ChatAvatar from './default.png'

function Message({ message, timestamp, user }) {
    return (
        
        <MessageContainer>
            <img src={ChatAvatar} alt="" />
            <MessageInfo>
                <h4>
                    {user} <span>{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message;

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    color: white;
    box-shadow: 1px 1px 4px;
    background: rgb(15,24,54);

    > img {
        height: 30px;
        border-radius: 8px;
    }
`;

const MessageInfo = styled.div`
    padding-left: 10px;

    > h4 > span {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`;