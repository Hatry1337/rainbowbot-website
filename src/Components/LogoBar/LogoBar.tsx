import React from 'react';
import "./LogoBar.css"

import logo_glow from "../../assets/logo_glow.png";

interface LogoBarProps{

}

function LogoBar(props: LogoBarProps) {
    return (
        <div className="LogoBar">
            <img src={logo_glow} className="LogoBar-logo" alt="logo" draggable="false"/>
            <h1 className="LogoBar-text">Imagine a BOT...</h1>
        </div>
    );
}

export default LogoBar;