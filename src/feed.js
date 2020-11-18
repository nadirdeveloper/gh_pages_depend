import React,{useState,useEffect} from 'react';
import "./feed.css";
import StoryReel from './storyreel';
import MessageSender from './MessageSender';
import Post from "./post";
import db from "./firebase";


function Feed() {
    const[posts,setPosts]=useState([]);
    useEffect(() => {
        db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot)=>setPosts(snapshot.docs.map((doc)=>({id:doc.id,data:doc.data()}))));
      
        }
    , [])
    return (
        <div className ='feed'>
            <StoryReel/>
            <MessageSender/>

            {posts.map(post=>(
                <Post
                key={post.id}
                profilePic={post.data.profilePic}
                message={post.data.message}
                username={post.data.username}
                image={post.data.image}
                />

            ))}
           
         </div>
    );
}

export default Feed;
