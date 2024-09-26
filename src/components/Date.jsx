import React from "react";
import './Date.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Date = ({title, type, time, platform})=>{
    return (
        <div className="datebox">
            <div className="title">{title}</div>
            <div className="type">{type}<ArrowForwardIosIcon/></div>

            <div className="meeting-details">
            <div className="time">
                <div className="time_icon">
                    <AccessTimeIcon/>
                </div>
                <div className="time_text">
                {time}
                </div>
                </div>
            <div className="platform"><div className="platform_icon">{platform === "Google meeting" ? <VideocamOutlinedIcon/> : platform === "Zoom" ? <VideocamOutlinedIcon/> : <LocationOnIcon/> }</div> <div className="platform_text"> {platform}</div></div>
            </div>
        </div>
    )
}

export default Date;