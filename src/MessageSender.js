import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React ,{useState} from 'react';
import "./messageSender.css";
import {useStateValue} from "./stateProvider";
import db from "./firebase";
import firebase from "./firebase";





function MessageSender() {
    const[{user},]=useStateValue();


    const [input,setInput]=useState('');
    const [imageUrl,setImageUrl]=useState('');
    const handleSubmit= (e)=>{
        e.preventDefault();
        db.collection("post").add({message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imageUrl,
        })

        setImageUrl("");
        setInput("");
    };

    return (
        <div className="messageSender">
              <div className="messageSender__top">
                  <Avatar src={user.photoURL}/>
                  <form>
                      <input
                      value={input}
                      onChange={(e)=>setInput(e.target.value)}
                      className="messageSender__Input"
                      placeholder={`Whats on your mind ,${user.displayName}?`}
                      />
                      <input  
                      value={imageUrl}
                      onChange={(e)=>setImageUrl(e.target.value)}

                      placeholder={'image URL(Optional )'}/>
                <button className="button" onClick={handleSubmit}>hidden sumit 
                        </button>
                      </form>
              </div>

<div className="messageSender__bottom">
    <div className="messageSender__option">
       <Videocam style={{color:"red"}}/>
           <h3>Video camera</h3>
       <PhotoLibrary style={{color:"green"}}/>
          <h3>PhotoVideo</h3>

       <InsertEmoticon style={{color:"orange"}}/>
       <h3>FeelingActivity</h3>

            </div>
          </div>
        </div>
        )
}

export default MessageSender;