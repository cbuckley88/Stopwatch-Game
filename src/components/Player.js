import React from 'react';
import Counter from './Counter'

const Player = (props) => {
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
          { props.name }
        </span>
  
        <Counter 
        score={props.score} 
        index = {props.index}
        changeScore = {props.changeScore}   
        />
      </div>
    );
}

  
export default Player;




// var playerArray = [];
// var playerScores = document.querySelectorAll('.player > .counter > span');
// for (var i = 0; i < playerScores.length; i++) {
//   playerArray.push(i);
  
// }
// console.log(playerArray[1]);


//var largest = Math.max(playerScores.value);
//playerScores[i].style.backgroundColor = "red";

