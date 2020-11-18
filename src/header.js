import React from 'react';
import "./header.css";
import SearchIcon from '@material-ui/icons/Search'; 
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar,IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from "./stateProvider";

function Header() {
  const[{user},dispatch]=useStateValue();
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/800px-Facebook_f_logo_%282019%29.svg.png"

                  alt=""/>
                <div className="header__input">
                    <SearchIcon/>
                    <input type="text"/>
               </div>
                  </div>
         <div className="header__center">
             < div className="header__option"> 
                <HomeIcon fontSize="large"/>
          </div>
             <div className="header__option"> 
               <FlagIcon fontSize="large"/>
          </div>
             <div className="header__option"> 
               <SubscriptionsIcon fontSize="large"/>
            </div>
             <div className="header__option"> 
               <StorefrontIcon fontSize="large"/>
             </div>
             <div className="header__option"> 
               <SupervisedUserCircleIcon fontSize="large"/>
             </div>
        </div>

                 <div className="header__right">
                 <div className="header__info">
                   <Avatar src={user.photoURL}/>
    <h4>{user.displaName}</h4>
                   <IconButton>

                   <AddIcon/>
                   </IconButton>
                   <IconButton>
                    <ForumIcon/>

                   </IconButton>
                   <IconButton>
                      <NotificationsIcon/>
                   </IconButton>
                   <IconButton>

                     <ExpandMoreIcon/>
                   </IconButton>
                   
                   </div>
                </div>
                </div>
    );
}
    
export default Header;


                   


               

             

        
            
       
    
