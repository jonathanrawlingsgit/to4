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
import { db } from '../firebase';


function Sidebar() {
    const [channels] = useCollection(db.collection("rooms"));
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>TEAMS OF 4</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        SeVeRiNcE
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
   background-color: var(--to4-color);
   color: white;
   flex: 0.3;
   border-top: 1px solid ;
   max-width: 260px;
   margin-top: 35px;

   > hr {
       margin-top: 10px;
       margin-bottom: 10px;
       border: .8px solid #4997df;
   }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid lightgreen;
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
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: lightgreen;

    }
`;
