import React, { Component } from 'react';
import { Modal, Text, View, Alert, Image, Button, Icon, TouchableOpacity } from 'react-native';
import connexion from "./screens/connexion"
import loggedOut from "./screens/loggedOut"
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const MainStackNavigator = createStackNavigator({
     loggedOut: { screen: loggedOut },
     connexion: { screen: connexion },
}, {
     headerMode: 'screen' // Signifie que le header sera géré au niveau de chaque écran avec la variable statique navigationOptions
}
);
const App = createAppContainer(MainStackNavigator);

export default App;
