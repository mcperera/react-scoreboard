import React from 'react';
//import PropTypes from 'prop-types';
import Stats from './Stats';
import Stopwatch from './Stopwatch';

const Header = ({ players, title }) => { // Destructing Props
  return (
    <header>
      <Stats players={ players }/>
      <h1>{ title }</h1>
      <Stopwatch />
    </header>
  );
}

// const Header = (props) => { // without Destructing Props
//   return (
//     <header>
//       <Stats players={ props.players }/>
//       <h1>{ props.title }</h1>
//       <Stopwatch />
//     </header>
//   );
// }

// Header.prototype = {
//   players: PropTypes.arrayOf(PropTypes.object), // Array object
//   title: PropTypes.string
// };

Header.defaultProps = { //Default Props
  title: 'Scoreboard' 
};

export default Header;