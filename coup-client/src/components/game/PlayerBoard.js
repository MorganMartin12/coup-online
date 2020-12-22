import React from 'react'
import './PlayerBoardStyles.css'

export default function PlayerBoard(props) {
    const influenceColorMap = {
        duke: '#D55DC7',
        captain: '#80C6E5',
        assassin: '#2B2B2B',
        contessa: '#E35646',
        ambassador: '#B4CA1F',
        '???' : 	'#808080'
    }
    let boardItems = null
    const influenceMap  = (player) => {
        console.log(player)
        
            return (
                player.revealed.map((influence, index) => {
                    return ( <div key={index} className="InfluenceUnitContainer">
                                <span className="circle" style={{backgroundColor: `${influenceColorMap[influence]}`}}></span>
                                <p>{influence}</p>
                            </div>)})
                )
    }
    if(props.players.length > 1 ) {
        boardItems = props.players.map((player, index) =>
            <span className="PlayerBoardItem" style={{ backgroundColor: `${player.color}` }} key={index}>
                <h2>{player.name}</h2>
                <p>Coins: {player.money}</p>
                <p>Influences: {player.influences.length}</p>
                {/* <p>{player.influences.join(', ')}</p> */}

                {
                    influenceMap(player)  
                }
            </span>
        );
    }
    return (
        <div className="PlayerBoardContainer" style={{textAlign: "center"}}>
            {boardItems}
        </div>
    )
  }



