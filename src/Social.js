import React from "react";
import './Social.css';
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
export default function Social(){
    return(
        <div className="socials">
           <div><FaTwitter /></div>
           <div><FaFacebook /></div>
           <div><FaInstagram /></div>
           <div><FaGithub /></div>
        </div>
    )
}