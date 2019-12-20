import React, { Component } from 'react';
import { Modal, Text, View, Alert, Image, Button, Icon, TouchableOpacity, TextInput } from 'react-native';

export default class loggedOut extends Component {
    constructor(props) {
        super(props);
        this.state = { secureTextEntry: true };
      }
    render() {
        return(
        <View style={{ backgroundColor: '#008489', flex: 1, flexDirection: 'column'}}>
            <View style={{ alignSelf: 'flex-start'}}>
                <Text style={{ color: 'white', fontSize:30, marginTop: 25, marginLeft:22}}>
                    Connexion
                </Text>
            </View>
            <View style={{ alignSelf: 'flex-start'}}>
                 <Text style={{ color: 'white', fontSize:20, marginTop: 50, marginLeft:22}}>
                    Email 
                 </Text>
                 <TextInput
                    style={{ height: 40, width: 350 , borderBottomColor: '#77b5fe', borderBottomWidth: 1, marginLeft:22, color: 'white' }}
                    onChangeText={text => console.log(text)}
                />
            </View>
            <View style={{ alignSelf: 'flex-start'}}>
                 
                <View style= {{flexDirection: "row",}}>
                    <Text style={{ color: 'white', fontSize:20, marginTop: 50, marginLeft:22}}>Mot de passe </Text>
                    <Text style={{ color: 'white', fontSize:20, marginTop: 50, marginLeft:170}} onPress={() => this.setState({ secureTextEntry: false })}>Show</Text>
                </View>
                 <TextInput
                 
                    style={{ height: 40, width: 350, borderBottomColor: '#77b5fe',borderBottomWidth: 1, marginLeft:22, color: 'white' }}
                    onChangeText={text => console.log(text)}
                    secureTextEntry={true}
                />
            </View>
        </View>
      );
    }
  }