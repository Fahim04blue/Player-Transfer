import React, { useState } from 'react';
 import './PlayerInfo.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faMinus} from '@fortawesome/free-solid-svg-icons'

const PlayerInfo = (props) => {
    const{Player_Name,Batting_Hand,Bowling_Skill,Country,image,price} =props.players
    const handleTransfer = props.handleTransfer
   
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
        <button className="addToClub" onClick={()=>{handleTransfer(props.players);setBtnText(!btnText)}} >
        {btnText? <><FontAwesomeIcon icon={faPlus} /> Add to Club</>   : <><FontAwesomeIcon icon={faMinus} /> Remove Player</> } 
        {/* Used React fragment here . React Fragment is more like a wrapper . Amra react e function er bhitor kisu return kori tokhon sheta div er bhitor return kortesi because JS e amra multiple jinish return korte pari na so amader ekta wrapper er moddhe return kora lagtese. Ekhon shei wrapper ta div na hoye onno kono component or fragment o hoite pare. <React.Fragment></React.Fragment> ke in short <></> eibhabe likhe. Eikhane fragment use korsi because amra ekta condition er bhitor multiple element return korte chaitesi  eijonno each condition ke ekta fragment er moddhe rekhe disi. Amra chaile eikhane div diyeo each condition ke wrap korte partam but div use korle dom er extra node create kora lagto extra space khaito and then re render kora lagto eijonno amra fragment use korsi.  Fragment is basically letting us add a list of children without adding extra nodes to DOM. ekhon amra ei line ta inspect korle eikahne kono extra node like div or something eshob kisu dekhbo na.*/}
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