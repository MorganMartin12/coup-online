import React from 'react'
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
          {action(influence.action)}
          {block(influence.block)}
          {onCoup(influence.onCoup)}
        </div>
    )
}
