import React from "react";

//Método con class
class Button extends React.Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    //Destructuracion
    const { count } = this.state;
    return (
      <div>
        <h1>Manzanas: {count} </h1>
        <button type="button" onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

//Método Button en Stateless
// const Button = props => {
//   const { text, text2 } = props;
//   return (
//     <div>
//       <button type="button">{props.text}</button>
//       <button type="button">{text2}</button>
//     </div>
//   );
// };

export default Button;
