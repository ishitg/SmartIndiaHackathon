import React from 'react';
import './Spotlight.css';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

const Spotlight = () => {
    return (
    <>
        <div className="main">
            <h2 className="spotlight">Spotlight</h2>
            <div className="information">
                <div className="image">
                    <img src='https://s3-alpha-sig.figma.com/img/11db/cb98/2f9ba115c7d5cc790cc48a457815fb67?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kspN16yEE17nDCvxPHa9foPF1ZdHZnqkEluwxEFER3McjH-XEG6wg2I5TvQH4Msed9dnKdFEseiZAA9tjvV4ACVLjSdbdlxaYEcoxysZHkbPI1eyVu2CXWj9h9J6xckrshylMV4rH3y1wJ9SiB20orm8NRNMSttQtSW4leWPYOfKzPKnfQhphSQlSQ7DfOiWrJ4UjT-dqpM38ckZjkpHepP1I1iHl9s18qX4nh8itYTDV4NODP11qFANYgMD5POoZxooe-aI4xOOvQa1-QDVj5ZVzcDjIVE2BCk7-6~HzFruOk~f1JceMA8xSOUk-cN53FUat2qUygD~ZyDOGaB2Lw__' alt="her image" />
                </div>
                <div className="otherdetail">
                    <div className="tag">Alumni of the month-August</div>
                    <div className="name">Mia Thompson</div>
                    <div className="institute">Indian Institute of Information</div>
                    <div className="category">Alumni</div>
                </div>
            </div>
            <div className="buttons">
                <button className="view">View profile</button>
                <button className="connect">Connect</button>
                <button className='friendAdd'><PersonAddOutlinedIcon/></button>
            </div>
        </div>
    </>
    )
}

export default Spotlight;