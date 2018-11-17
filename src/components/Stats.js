import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {

    const totalPlayers = props.players.length;
    const totalPoints = props.players.reduce((total, player)=> {   // Array of object with shape DOWN 1
        return total + player.score;
    },0);

    return(
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{totalPlayers}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalPoints}</td>
                </tr>
        </tbody>
      </table>
    );
}

//Not recommended (Validate Props with PropTypes)
Stats.propTypes  = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    }))  // Array of object with shape UP ^ 1
};

export default Stats;