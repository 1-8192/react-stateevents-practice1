import React from "react";

class DogCard extends React.Component {

  constructor() {
    super()
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <img alt={this.props.name} src={this.props.img} />
        <button onClick={this.handleClick}>Bark</button>
        <h2 className="bark">{this.state.clicked ? "RUFF" : ""}</h2>
      </div>
    );
  }
}

export default DogCard;
