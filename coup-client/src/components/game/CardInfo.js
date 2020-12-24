import React from 'react'
import dukeImage from '../../assets/Duke.png'
import ambassadorImage from '../../assets/Ambassador.png'
import contessaImage from '../../assets/Contessa.png'
import assassinImage from '../../assets/Assassin.png'
import captainImage from "../../assets/Captain.png"
import chicken from "../../assets/Chicken.svg"
import './CoupStyles.css';
const getImage = (name) => {
    switch(name) {
        case "duke" :
            return dukeImage
        case"contessa":
            return contessaImage
        case "ambassador":
            return ambassadorImage
        case "assassin":
            return assassinImage
        case "captain":
            return captainImage
        default :
            return chicken
    }
}
const action = (action) => {
    if(action){ return (
        <h5>Action:{action}</h5>
    )}
    else { return null}
}
const block = (block) => {
    if(block){ return (
        <h5>Block:{block}</h5>
    )}
    else { return null}
}
const onCoup = (onCoup) => {
    if(onCoup){ return (
        <h5>Coup Reveal:{onCoup}</h5>
    )}
    else { return null}
}
export default function CardInfo({influence}) {
    return (
        <div>
          <img class ="card-image" src={getImage(influence.name)} alt="influence image"></img>
          {action(influence.action)}
          {block(influence.block)}
          {onCoup(influence.onCoup)}
        </div>
    )
}
