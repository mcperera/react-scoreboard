import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';


class Player extends PureComponent { // Optimize Performance with PureComponent

  static propTypes = {  //Static PropTypes
    name: PropTypes.string,
    id: PropTypes.number,
    score: PropTypes.number.isRequired, // isRequired
    index: PropTypes.number,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func
  };

  render(){
    const { 
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore,
      isHighScore  /*true or false*/
     } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
           <Icon isHighScore = {isHighScore}/> 
           { name }
        </span>
  
        <Counter score={score} changeScore={changeScore} index={index}/>
      </div>
    );
  }
}


// const Player = (props) => {
//   render(){
//     return (
//       <div className="player">
//         <span className="player-name">
//           <button className="remove-player" onClick={() => this.props.removePlayer(this.props.id)}>✖</button>
//           { this.props.name }
//         </span>
  
//         <Counter score={this.props.score} changeScore={this.props.changeScore} index={this.props.index}/>
//       </div>
//     );
//   }
// }

export default Player;