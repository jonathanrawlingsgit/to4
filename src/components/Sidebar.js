import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SidebarOption from './SidebarOption';
import AddIcon from '@mui/icons-material/Add'
import { useCollection } from 'react-firebase-hooks/firestore';
import { db, auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth'


function Sidebar() {
    const [channels] = useCollection(db.collection("rooms"));
    const [user] = useAuthState(auth);

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>TEAMS OF 4</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        
                    </h3>
                </SidebarInfo>
              <CreateIcon />
            </SidebarHeader>

            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
            <SidebarOption Icon={DraftsIcon} title="Saved Items" />
            <SidebarOption Icon={BookmarkIcon} title="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} title="Players & Teams" />
            <SidebarOption Icon={FileCopyIcon} title="File browser" />
            <SidebarOption Icon={AppsIcon} title="Apps" />
            <SidebarOption Icon={ExpandLessIcon} title="Show less" />
            <hr />
            <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

            {channels?.docs.map((doc) => (
                <SidebarOption
                key={doc.id}
                id={doc.id}
                title={doc.data().name}
                />
                
            ))}

        </SidebarContainer>
    )
}

export default Sidebar;



const SidebarContainer = styled.div`
      background: rgb(15,24,54);
background: linear-gradient(306deg, rgba(15,24,54,1) 0%, rgba(191,220,255,1) 180%);
        opacity: 2;
        text-shadow: 0 0 10px #9ecaed;
        border-color: #9ecaed;
        color: #fff;
        flex: 0.3;
        max-width: 260px;
        min-width: 200px;
        margin-top: 49px;
        margin-left: 3px;

   > hr {
       margin-top: 10px;
       margin-bottom: 10px;
       border-color: #9ecaed;
        color: #fff;
        box-shadow: 0 0 7px #9ecaed;
   flex: 0.3;
   }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-color: #9ecaed;
    color: #fff;
   
    padding: 13px;
   

    > .MuiSvgIcon-root {
        padding: 8px;
        color: var(--to4-color);
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;
    

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
        align-items: center;
        
    }

    > h3 {
        display: flex;
        font-weight: 400;
        font-size: 13px;
        color: white;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 20px;
        margin-top: 1px;
        margin-right: 2px;
        color: lightgreen;

    }
`;
