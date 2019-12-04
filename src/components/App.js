import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import Stats  from './Stats';
import AddPlayerForm from './AddPlayerForm';
import Stopwatch from './Stopwatch';

class App extends Component {
  state = {
    players: [
      {
        name: "Charles",
        score: 0,
        id: 1
      },
      {
        name: "Mike",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  // player I D counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
   
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players = {this.state.players}
          
        />
       
        {/* Players list */}
        {this.state.players.map((player, index) =>
          <Player 
            name={player.name}
            score = {player.score}
            index = {index}
            id={player.id}
            key={player.id.toString()} 
            changeScore= {this.handleScoreChange}
            removePlayer={this.handleRemovePlayer}           
          />
          
        )}
        
          <AddPlayerForm  addPlayer = {this.handleAddPlayer}/>

      </div>
    );
  }
}

export default App;
