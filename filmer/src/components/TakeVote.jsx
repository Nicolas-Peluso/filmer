import React from 'react'
import Style from "./TakeVote.module.css"

function TakeVote({ vote, width, heigth, fontSize }) {
    return (
        <div style={{
            borderColor: vote > 5 ? "green" : "red",
            width: width ? width + 'px' : null,
            height: heigth ? heigth + 'px' : null,
            fontSize: fontSize ? fontSize + 'em' : null
        }} className={Style.voter}>
            <p>⭐{vote.toFixed(1)}/ 10</p>
        </div>
    )
}
export default TakeVote
