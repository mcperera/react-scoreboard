import React, { Component } from 'react'; //Named import statments (1).
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {  //Remove the React.Component (2).
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
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

  //Player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => { // anyname delta (variation of a function)
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
    //console.log('index:' + index, 'delta:' + delta); 
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
          players: [
            ...this.state.players,
            {
            name, //name: name, ES6
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      };
    });
  }

  getHighScore = () => {
    const scores = this.state.players.map(p => p.score);
    const highScore = Math.max(...scores);
    if(highScore){
      return highScore;
    }
    return null;
  }
  
  //Update the players state using the concat() method:
  // ----------Another method for above method-----------

  // handleAddPlayer = (name) => {
  //   let newPlayer = {
  //     name,
  //     score: 0,
  //     id: this.prevPlayerId += 1
  //   };
  //   this.setState( prevState => ({
  //     players: prevState.players.concat(newPlayer)
  //   }));
  // }

  render() {

    const highScorE = this.getHighScore();

    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            changeScore={this.handleScoreChange}
            index={index}
            id={player.id}
            key={player.id.toString()}
            removePlayer={this.handleRemovePlayer}
            isHighScore={ highScorE === player.score }           
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
