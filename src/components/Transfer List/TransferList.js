import React from 'react';
import './TransferList.css'

const TransferList = (props) => {
    const list = props.transferList
    const total = list.reduce((total,pd)=>total+pd.price,0)
    return (
        <div className='transfers' >
                <h2>Added To Club</h2>
            <div className='budget'>
                <h3>Total Players : {list.length}</h3>
                <h3>Total Salary: ${total} </h3>
            </div>
            {
                list.map(selectedPlayers=><div  class="card-container mt-3">
                                            <img class="round" src={selectedPlayers.image} alt="user"/>
                                            <h3>{selectedPlayers.Player_Name}</h3>
                                            <h6>{selectedPlayers.Country}</h6>
                                            <p>Salary: ${selectedPlayers.price}</p>
                                        </div>)
            }

        </div>
    );
};

export default TransferList;