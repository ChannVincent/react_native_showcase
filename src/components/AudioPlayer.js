import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slider from 'react-native-slider';
import Video from 'react-native-video';

class AudioPlayer extends Component {

  state = {
    playing: true,
    muted: false,
    sliding: false,
    currentTime: 0
  };

  /*
  Player Audio
  */
  togglePlay() {
    this.setState({ playing: !this.state.playing });
  }

  toggleVolume() {
    this.setState({ muted: !this.state.muted });
  }

  setTime(params) {
    if(!this.state.sliding) {
      this.setState({ currentTime: params.currentTime });
    }
  }

  onLoad(params) {
    this.setState({ songDuration: params.duration });
  }

  /*
  Slider
  */
  onSlidingStart() {
    this.setState({ sliding: true });
  }

  onSlidingChange(value) {
    let newPosition = value * this.state.songDuration;
    this.setState({ currentTime: newPosition });
  }

  onSlidingComplete() {
    this.refs.audio.seek( this.state.currentTime );
    this.setState({ sliding: false });
  }

  onEnd() {
    this.setState({ playing: false });
  }

  /*
  Life cycle
  */
  render() {
    // slider progress
    let songPercentage;
    if(this.state.songDuration !== undefined) {
      songPercentage = this.state.currentTime / this.state.songDuration;
    }
    else {
      songPercentage = 0;
    }


    return (
      <View>

        <Text>AudioPlayer</Text>
      </View>
    )
  }
}

export default AudioPlayer;
