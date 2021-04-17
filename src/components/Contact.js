import React from 'react';
import './Contact.css';

function Contact () {
    const avatar = "https://randomuser.me/api/portraits/men/1.jpg";
    const name = "Tomothy Lawson"
    const status = true;
    return (
        <div className="Contact"> 
            <img src={avatar} className="avatar" alt="avatar"/>
            
            <div className="">
            <p className="status name status-text">{name}</p>
            <p className="status"><span className="status-online"></span>{status ? "Online" : "Offline"}</p>
            </div>
        
            
        </div>
    )
}

export default Contact;