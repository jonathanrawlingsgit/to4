import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';

function Sidebar() {
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
        </SidebarContainer>
    )
}

export default Sidebar;



const SidebarContainer = styled.div`
   background-color: var(--to4-color);
   color: white;
   flex: 0.3;
   border-top: 1px solid lightgreen;
   max-width: 260px;
   margin-top: 46px;
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
        color: lightskyblue;

    }
`;
