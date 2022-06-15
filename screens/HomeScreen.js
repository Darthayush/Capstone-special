import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import MyHeader from '../components/MyHeader';

import db from '../config';

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      allRequests: [],
      blogs:''
    };
    this.requestRef = null;
  }

  submitBlogs = () => {
    db.collection('Blogs').add({
      blogs:this.state.blogs
    });
    this.setState({
      blogs:'',
    });
    alert(
      "Your story has been submitted successfully. If you want to read your thoughts or any others thoughts written by different users on the app, then you can just search for the title or author name in the Notification section of this app."
    );
  };

  getAllRequests = () => {
    this.requestRef = db
      .collection('exchange_requests')
      .onSnapshot((snapshot) => {
        var allRequests = [];
        snapshot.forEach((doc) => {
          allRequests.push(doc.data());
        });
        this.setState({ allRequests: allRequests });
      });
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    console.log(item.username);
    return (
      <ListItem
        key={i}
        title={item.item_name}
        subtitle={item.description}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('ReceiverDetails', {
                details: item,
              });
              console.log('this are items ', item.username);
            }}>
            <Text style={{ color: '#ffff' }}>View</Text>
          </TouchableOpacity>
        }
        bottomDivider
      />
    );
  };

  componentDidMount() {
    this.getAllRequests();
  }

  componentWillUnmount() {
    this.requestRef();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Blogs" navigation={this.props.navigation} />
        <View style={{ flex: 1 }}>
          <View>
            <TextInput
              multiline={true}
              style={styles.inputBox}
              onChangeText={(text) => {
                this.setState({ blogs: text });
              }}
              value={this.state.blogs}
              placeholder="Your Thoughts"
            />

            <TouchableOpacity onPress={
              ()=>{this.submitBlogs()}
            }> 
              <Text style={styles.displayText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff5722',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 150,
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 20,
    borderColor: '#black',
    color: '#2C5361',
    borderRadius: 25,
  },
  displayText: {
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
  },
});
