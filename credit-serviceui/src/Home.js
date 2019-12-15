import React, { Component } from "react";
import Body from './Body'
import ImageSlider from './ImageSlider'

export default class HomeComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <ImageSlider/>
        <Body/>
      </React.Fragment>
    );
  }
}
