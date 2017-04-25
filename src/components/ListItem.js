import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
//import { CardSection, Card } from './common';

class ListItem extends Component {
  render() {
    const { onPress, title, urlImage } = this.props;
    return (
      // <TouchableOpacity onPress={ onPress }>
      //   <Card>
      //     <CardSection>
      //       <Text style={ styles.titleStyle }>{ title }</Text>
      //     </CardSection>
      //
      //     <CardSection>
      //       <Image
      //         style={ styles.imageStyle }
      //         source={{ uri: urlImage }}
      //       />
      //     </CardSection>
      //   </Card>
      // </TouchableOpacity>
      <Text>{ title }</Text>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  imageStyle: {
    flex: 1,
    height: 250,
    resizeMode: 'contain'
  }
}

export default ListItem;
