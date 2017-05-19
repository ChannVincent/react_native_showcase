import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import Slider from 'react-native-slider';
import Video from 'react-native-video';
const { width, height } = Dimensions.get('window');

/*
https://github.com/devnacho/react-native-music-player/blob/master/app/components/player/Player.js
https://github.com/react-native-community/react-native-video
https://github.com/jeanregisser/react-native-slider
*/
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
    console.log('setTime - currentTime : ' + params.currentTime);
    if(!this.state.sliding) {
      this.setState({ currentTime: params.currentTime });
    }
  }

  onLoad(params) {
    console.log('onLoad - duration : ' + params.duration);
    this.setState({ songDuration: params.duration });
  }

  onEnd() {
    console.log('onEnd');
    this.setState({ playing: false });
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
        <Video
          source={ require('../../assets/media63100.m4a') }
          ref="audio"
          volume={ this.state.muted ? 0 : 1.0 }
          muted={ false }
          paused={ !this.state.playing }
          onLoad={ this.onLoad.bind(this) }
          onProgress={ this.setTime.bind(this) }
          onEnd={ this.onEnd.bind(this) }
          resizeMode="cover"
          repeat={ false }
          playInBackground={ true }
        />
        <View style={ styles.sliderContainer }>
          <Slider
            onSlidingStart={ this.onSlidingStart.bind(this) }
            onSlidingComplete={ this.onSlidingComplete.bind(this) }
            onValueChange={ this.onSlidingChange.bind(this) }
            minimumTrackTintColor='#851c44'
            style={ styles.slider }
            trackStyle={ styles.sliderTrack }
            thumbStyle={ styles.sliderThumb }
            value={ songPercentage }
          />
        </View>
      </View>
    )
  }
}

const styles = {
  sliderContainer: {
    margin: 5,
    backgroundColor: '#eee',
  },
  timeInfo: {
    flexDirection: 'row',
  },
  time: {
    color: '#FFF',
    flex: 1,
    fontSize: 10,
  },
  timeRight: {
    color: '#FFF',
    textAlign: 'right',
    flex: 1,
    fontSize: 10,
  },
  slider: {
    height: 20,
  },
  sliderTrack: {
    height: 2,
    backgroundColor: '#333',
  },
  sliderThumb: {
    top: 11,
    width: 14,
    height: 14,
    backgroundColor: '#f62976',
    borderRadius: 7,
    shadowColor: 'red',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 2,
    shadowOpacity: 1,
  }
}
export default AudioPlayer;
