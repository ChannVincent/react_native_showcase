import React, { Component } from 'react';
import { Text, TouchableOpacity, Platform, Image } from 'react-native';

class PlayPauseButton extends Component {

  state = {
    play: 0
  }

  renderImage() {
    switch (this.state.play) {
      case 0:
        return (
          <Image
            source={ require('../../../assets/ic_play.png') }
            style={ styles.imageStyle }
            />
        );
      case 1:
        return (
          <Image
            source={ require('../../../assets/ic_pause.png') }
            style={ styles.imageStyle }
            />
        );
      default:
        return (
          <Image
            source={ require('../../../assets/ic_play.png') }
            style={ styles.imageStyle }
            />
        );
    }
  }

  togglePlay() {
    switch (this.state.play) {
      case 0:
        this.setState({ play: 1 });
        if (this.props.onPressPlay !== undefined) {
          this.props.onPressPlay();
        }
        break;

      case 1:
        this.setState({ play: 0 });
        if (this.props.onPressPause !== undefined) {
          this.props.onPressPause();
        }
        break;

      default:
        this.setState({ play: 1 });
        break;
    }
  }

  render() {
    const { buttonStyle } = this.props;
    return (
      <TouchableOpacity onPress={ this.togglePlay.bind(this) }>
        { this.renderImage() }
      </TouchableOpacity>
    )
  }
}

const styles = {
  mainButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#ccc'
  },
  imageStyle: {
    width: 30,
    height: 30,
    margin: 5,
  },
}

export { PlayPauseButton };
