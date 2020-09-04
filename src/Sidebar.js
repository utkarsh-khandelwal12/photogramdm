import React, { useState,useEffect } from 'react';
import {Avatar, IconButton} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import {SearchOutlined} from '@material-ui/icons';
import './Sidebar.css';
import SidebarChat from './SidebarChat.js';
import db from './firebase';
import { useStateValue } from './StateProvider';

function Sidebar(){

    const [rooms, setRooms] = useState([]);
    const[{user},dispatch]=useStateValue();

    useEffect(()=>{
        const unsubscribe=db.collection('rooms').onSnapshot((snapshot) =>
            setRooms(
                snapshot.docs.map((doc)=> ({
                    id:doc.id,
                    data:doc.data(),
                }))
            )
        );

        return ()=>{
            unsubscribe();
        }
        
    }, []);

    return(
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL} />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <DragIndicatorIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <div className="search__container">
                    <SearchOutlined/>
                    <input placeholder="Type text to search" type="text"/>
                </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>   
                {rooms.map(room=>(
                    <SidebarChat key={room.id} id={room.id}
                    name={room.data.name}/>
                ))} 
            </div>
        </div>
    );
}

export default Sidebar;
