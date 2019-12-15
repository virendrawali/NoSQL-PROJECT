import React, { Component } from "react";
import Body from './Body'
import ImageSlider from './ImageSlider'
import Landingpage from './Landingpage'

export default class HomeComponent extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <ImageSlider/>
        <Body/> */}
        <Landingpage/>
      </React.Fragment>
    );
  }
}
