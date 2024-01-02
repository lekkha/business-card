import React from "react";
import './Card-holder.css';
import CardInfo from './CardInfo';
import About from './About';
import Interest from './Interests';
import Social from './Social';

export default function CardHolder() {
    return(
        <div className="card-holder">
           <CardInfo /> 
           <About />
           <Interest />
           <Social />
        </div>
    )
}