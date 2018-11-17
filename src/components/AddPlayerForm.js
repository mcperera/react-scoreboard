import React, { Component } from 'react';

//-------- Refs and the DOM with a class--------

class AddPlayerForm extends Component{

    playerInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.playerInput.current.value);
        e.currentTarget.reset();
    }

    render(){
        //console.log(this.state.value);
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                ref={this.playerInput}
                placeholder="Enter a player's Name"
                 />
                <input type="submit" value="Add Player" />
            </form>
        );
    }
}

// -------- Refs and the DOM with a function -------
// const AddPlayerForm = ({ addPlayer }) => {

//     let playerInput = React.createRef();
//     let handleSubmit = (e) => {
//       e.preventDefault();
//       addPlayer(playerInput.current.value);
//       e.currentTarget.reset();
//     }
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text" 
//           ref={playerInput}
//           placeholder="Enter a player's name"
//         />
  
//         <input 
//           type="submit" 
//           value="Add Player" 
//         />
//       </form>
//     ); 
//   }


//-------- Without Refs and the DOM --------
// class AddPlayerForm extends Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             value: ''
//         }
//     }

//     handleValueChange = (e) => {
//         this.setState({
//             value: e.target.value
//         })
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         this.props.addPlayer(this.state.value);
//         this.setState({
//             value: ''
//         })
//     }

//     render(){
//         //console.log(this.state.value);
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <input 
//                 type="text" 
//                 placeholder="Enter a player's Name"
//                 value={this.state.value}
//                 onChange={this.handleValueChange}
//                  />
//                 <input type="submit" value="Add Player" />
//             </form>
//         );
//     }
// }

export default AddPlayerForm;