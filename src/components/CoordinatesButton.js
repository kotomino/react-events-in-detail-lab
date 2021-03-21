import React from 'react';

class CoordinatesButton extends React.Component {

  onClick = (event) => {
    const array = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(array);

  }

  render() {
    return <button onClick={this.onClick}>Coordinates</button>
  }


}

export default CoordinatesButton;
