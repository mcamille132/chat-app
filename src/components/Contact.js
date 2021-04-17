import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

function Contact (props) {
    //const avatar = "https://randomuser.me/api/portraits/men/1.jpg";
    //const name = "Tomothy Lawson"
    //const status = true;
    return (
        <div className="Contact"> 
            <img src={props.avatar} className="avatar" alt="avatar"/>
                <div>
                    <p className="status name status-text">{props.name}</p>
                    <p className="status"><span className={props.status ? 'status-online' : 'status-offline'}></span>{props.status ? "Online" : "Offline"}</p>
                </div>
        </div>
    );
}
Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
  };

export default Contact;