'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroScene,
  ViroText,
  ViroImage,
  Viro360Image,
  ViroAnimations
} from 'react-viro';




export default class HelloWorldScene extends Component {

  constructor() {
    super();
    //runAnimateImage initialize the boolean value for controlling the start of the animation
    this.state = {runAnimateImage: false} // Set initial state here
  }

    // To actually run the animation
  componentDidMount() {
    setTimeout(() => {
      this.setState({ runAnimateImage: true });
    }, 5000);
  }

  render() {
    return (
      <ViroScene>
        <Viro360Image source={require('./res/360_waikiki.jpg')} />
        <ViroText text="first text !" width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} outerStroke={{ type: "Outline", width: 8, color: "#333" }}/>
        <ViroText
        text="second text!"
        width={6}
        height={5}
        position={[0, -2, -2]}
        style={styles.textStyle}
        outerStroke={{ type: "Outline", width: 8, color: "#333" }}
        />
        <ViroImage
        height={1}
        width={1}
        position={[0, -2, -4]}
        source={require("./res/OIP.jpg")}
        animation={{ name: "animateImage", run: this.state.runAnimateImage }}
        />
      </ViroScene>
      
    );
  }

}
// define animation
// Here, we’re doing a scale animation. This scales the x (horizontal) and y (vertical)
// dimensions of the image. As you can imagine, the values we specified will elongate
// the image horizontally until it becomes twice its original width. While doing that, we
// also make the image smaller in height so it becomes 80% its original height.
// easing is the progression of the animation. EaseIn means that the animation will begin slowly and then speed up as it progresses. 
// Lastly, the duration is how long the animation will take in milliseconds. In this case, we’re animating it over the course of 3 seconds
ViroAnimations.registerAnimations({
  animateImage: {
    properties: { scaleX: 2, scaleY: 0.8 },
    easing: "EaseIn",
    duration: 3000
  }
});
var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
  textStyle: {
    fontFamily: "Arial",
    fontSize: 20,
    color: "#ffffff",
    textAlignVertical: "center",
    textAlign: "center"
  }
});

module.exports = HelloWorldScene;
