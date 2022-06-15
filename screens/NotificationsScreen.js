import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';
import SwipeableFlatlist from '../components/SwipeableFlatlist';
import db from '../config';

export default class NotificationScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allBlogs: [],
    };

    this.notificationRef = null;
  }

  componentDidMount() {
    this.retrieveStories();
  }

  retrieveStories = () => {
    try {
      var allBlogs = [];
      var Blogs = db
        .collection('Blogs')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            allBlogs.push(doc.data());
            console.log('this are the stories', allBlogs);
          });
          this.setState({ allBlogs });
          console.log(this.state.allBlogs.blogs);
        });
    } catch (error) {
      console.log(error);
    }
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        title={item.allBlogs}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        bottomDivider
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 0.1 }}>
          <MyHeader
            title={'Worlds Thoughts'}
            navigation={this.props.navigation}
          />
        </View>
        <View style={{ flex: 0.9 }}>
          {this.state.allBlogs.length === 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 25 }}>You have no notifications</Text>
            </View>
          ) : (
            <FlatList
              data={this.state.allBlogs}
              renderItem={({ item, index }) => (
                <View style={styles.itemContainer}>
                  <ListItem
                    key={index}
                    subtitle={item.blogs}
                    subtitleStyle={{color:'black',fontWeight:'bold'}}
                    title={index+1}
                    titleStyle={{ color: 'black', fontWeight: 'bold' }}
                    bottomDivider
                  />
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
