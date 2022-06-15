import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSidebarMenu from './CustomSidebarMenu';
import MyBartersScreen from '../screens/MyBartersScreen';
import SettingScreen from '../screens/SettingScreen';
import NotificationScreen from '../screens/NotificationsScreen';
import React from 'react';



export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={AppTabNavigator} />
        <Drawer.Screen name="MyBarters" component={MyBartersScreen} />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
        <Drawer.Screen name="Setting" component={SettingScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
const Drawer = createDrawerNavigator();

/*function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={AppTabNavigator} />
      <Drawer.Screen name="MyBarters" component={MyBartersScreen} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
      <Drawer.Screen name="Setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
}*/

/*export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: AppTabNavigator,
    },
    MyBarters: {
      screen: MyBartersScreen,
    },
    Notifications: {
      screen: NotificationScreen,
    },
    Setting: {
      screen: SettingScreen,
    },
  },
  {
    contentComponent: CustomSidebarMenu,
  },
  {
    initialRouteName: 'Home',
  }
);*/
