import React, { Component } from "react";
import Matrix from "./Matrix";
import MatrixInputForm from "./MatrixInputForm"

export default class SpiralMatrixContainer extends Component {
  constructor() {
    super();
    this.state = {
      width: 20,
      height: 20
    };
  }

  setNewDimensions = (newWidth, newHeight) => {
    this.setState({ width: newWidth,
        height: newHeight 
     });
  };

  render() {
      const {width, height} = this.state;
    return <div>
        <MatrixInputForm  width={width} height={height} setNewDimensions={this.setNewDimensions}/>
        <Matrix width={width} height={height}/>
    </div>;
  }
}
