import React, { useState } from 'react';
 import './PlayerInfo.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faCheck } from '@fortawesome/free-solid-svg-icons'

const PlayerInfo = (props) => {
    const{Player_Name,Batting_Hand,Bowling_Skill,Country,image,price} =props.players
    const handleTransfer = props.handleTransfer
    const [disableBtn,setDisableBtn]=useState(false)
    const [btnText,setBtnText]=useState(true)
    return (
        <div class="col-lg-4">
            <div class="card-container">
  
    <img
        class="round"
        src={image}
        alt="user"
    />
    <h3>{Player_Name}</h3>
    <h6>{Country}</h6>
    <p>
       Salary: ${price}
    </p>
    <div class="buttons">
        <button className={disableBtn ? "addToClub disable":"addToClub"} onClick={()=>{handleTransfer(props.players);setBtnText(!btnText);setDisableBtn(true)}} >
        {btnText? <><FontAwesomeIcon icon={faPlus} /> Add to Club</>   : (<><FontAwesomeIcon icon={faCheck} /> Player Already Added</>) }
        </button>
       
    </div>
    <div class="skills">
        <h6>Player Info</h6>
        <ul>
            <li> {Batting_Hand} Batsman </li>
            <li> {Bowling_Skill} Bowler </li>
            
        </ul>
    </div>
</div>
        </div>
    );
};

export default PlayerInfo;