import React from 'react';
import { Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class App extends React.Component {

  buzzIt = async () => {
    try {
      const { buzz, status } = await Expo.Audio.Sound.create(
        require('./assets/buzzer_trimmed.mp3'),
        { shouldPlay: true }
      );
    } catch (e) {

    }
    console.log('hello world');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.buzzIt}>
          <Image
            source={require('./assets/buzzer.jpeg')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
