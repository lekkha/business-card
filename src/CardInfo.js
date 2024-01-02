import React from "react"
import './CardInfo.css'
import girl from "./buzgirl.png"


export default function CardInfo(){
    return (
        <div className="card-wrapper">
            <img src={girl} alt="Girl" className="girl-img" />
            <h2>Lara Reagen</h2>
            <h4>FrontEnd Developer</h4>
            <div className="card-btns">
                <button className="email">Email</button>
                <button className="linkedin">Linkedin</button>
            </div>
        </div>
    )
}