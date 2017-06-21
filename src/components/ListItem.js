import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { CardSection, Card } from './common';

class ListItem extends Component {
  render() {
    const { onPress, title, urlImage, subtitle } = this.props;
    return (
      <TouchableOpacity onPress={ onPress }>
        <Card>
          <CardSection style={ styles.cardStyle }>
            <View style={ styles.imageContainerStyle }>
              <Image
                style={ styles.imageStyle }
                source={{ uri: urlImage }}
              />
            </View>
          </CardSection>

            <CardSection style={{justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'column'}}>
                <Text style={ styles.titleStyle }>{ title }</Text>
                <Text style={ styles.subtitleStyle }>{ subtitle }</Text>
              </View>
              <Image
                style={ styles.arrowStyle }
                source={require('../../assets/ic_arrow.png')}
              />
            </CardSection>

            <View style={{flex: 1, backgroundColor:'#989898', height: 1}}>
            </View>
        </Card>
      </TouchableOpacity>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 0,
  },
  subtitleStyle: {
    fontSize: 12,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 10,
    color:'#a5a5a5'
  },
  cardStyle: {
    padding: 0
  },
  imageContainerStyle: {
    flex: 1,
    height: 250
  },
  imageStyle: {
    flex: 1,
    height: 250,
    resizeMode: 'cover'
  },
  arrowStyle: {
    width:35,
    height: 35,
    tintColor: '#a65b62',
    alignSelf: 'center',
  }
}

export default ListItem;
