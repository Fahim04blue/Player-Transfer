import React, { useEffect, useState } from 'react';
import PlayerInfo from '../Player Info/PlayerInfo';
import TransferList from '../Transfer List/TransferList';
import playerData from '../../Fake Data/data.json'
import './Player.css'

const Player = () => {
    const first15 = playerData.slice(0,15)
    const [playerCard,setPlayerCard]=useState(first15)
    const [prevTransfers,setTransfers] = useState([])
    const handleTransfer=player=>{
        console.log('Added',player)
        setTransfers([...prevTransfers,player])
    }
    useEffect(() => {
       console.log(playerData)
        setPlayerCard(first15)
    },[])
    return (
        <div className='mt-3 player-container d-flex'>
            <div className='playerInfo-container'>
             <div class="row g-3">
                {
                    playerCard.map(player=><PlayerInfo players={player} handleTransfer={handleTransfer}></PlayerInfo>)
                }
             </div> 
             
            </div>
            <div className='transfer-container'>
             <TransferList transferList={prevTransfers}></TransferList>
            </div>
            
            
        </div>
    );
};

export default Player;