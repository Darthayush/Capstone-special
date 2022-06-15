import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  speak() {
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#56A3BF'}
          centerComponent={{
            text: 'Text to Hear',
            style: { color: '#fff', fontSize: 28 },
          }}
        />

        <Image
          style={styles.imageIcon}
          source={{
            uri: 'https://www.shareicon.net/data/128x128//2016/06/11/779043_multimedia_512x512.png',
          }}
        />
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
            value={this.state.text}
            defaultValue={'The'}
            placeholder="Type your text here"
            multiline={true}
          />

        <TouchableOpacity
          style={styles.speechButton}
          onPress={() => {
            this.speak();
          }}>
          <Text style={styles.displayText}>Click to Hear</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 140,
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 20,
    borderColor: '#black',
    color: '#2C5361',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
  },
  speechButton: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: 50,
  },
  imageIcon: {
    width: 100,
    height: 100,
    marginTop: 20,
    alignSelf: 'center',
  },
});
