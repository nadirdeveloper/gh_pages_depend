import React from 'react';
import "./sidebar.css"
import SidebarRow from "./sidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from "./stateProvider";
import {useState} from 'react';




function Sidebar() {
    const[{user},dispatch]=useStateValue();

    return (
        <div className="sidebar">
         <SidebarRow src={user.photoURL} title={user.displayName}/>

            <SidebarRow Icon={LocalHospitalIcon}title='COVIC-19 Information Center '/>

            <SidebarRow Icon={EmojiFlagsIcon}title='pages'/>
            <SidebarRow Icon={PeopleIcon}  title='friends'/>
            <SidebarRow Icon={ChatIcon}title='Messenger'/>
            <SidebarRow Icon={StorefrontIcon}title='Marketplace'/>
            <SidebarRow Icon={VideoCallIcon}title='videos'/>

            <SidebarRow Icon={ExpandMoreIcon} title='marketplace'/>



            
        </div>
    )
}

export default Sidebar;
