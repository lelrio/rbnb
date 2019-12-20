import React, { Component } from 'react';
import { Modal, Text, View, Alert, Image, Button, Icon, TouchableOpacity, TextInput } from 'react-native';

export default class loggedOut extends Component {
    constructor(props) {
        super(props);
        this.setSate = ({ secureTextEntry: true });

        this.state = {
            email: '',
            password: '',
        };
    };
    handleEmailChange = (value) => {
        this.setState({ email: value });
    }
      
    handlePasswordChange = (value) => {
        this.setState({ password: value });
    }   
    render() {
        const { email, password } = this.state;
        const enabled =
          email.length > 0 &&
          password.length > 0;
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
                        type="text"
                        value={this.state.email}
                        onChangeText={this.handleEmailChange}
                    />
                    <View style= {{flexDirection: "row",}}>
                        <Text style={{ color: 'white', fontSize:20, marginTop: 50, marginLeft:22}}>Mot de passe </Text>
                        <Text style={{ color: 'white', fontSize:20, marginTop: 50, marginLeft:170}} onPress={() => this.setState({ secureTextEntry: false })}>Show</Text>
                    </View>
                    <TextInput
                        style= {{ height: 40, width: 350, borderBottomColor: '#77b5fe',borderBottomWidth: 1, marginLeft:22, color: 'white' }}
                        secureTextEntry= {true}
                        value= {this.state.password}
                        onChangeText={this.handlePasswordChange}
                        type={password}
                    />
                </View>
                <View style={{ alignSelf: 'center', marginTop:50}}>
                    <Button
                        disabled={!enabled}
                        style={{ color: 'white', fontSize:20, marginTop: 50, alignSelf: 'center'}}
                        title="Press me"
                    />
                </View>
        </View>
      );
    }
  }