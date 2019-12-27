import React, { Component } from 'react';
import { Modal, Text, View, Alert, Image, Button, Icon, TouchableOpacity, TextInput } from 'react-native';

export default class loggedOut extends Component {
    constructor(props) {
        super(props);
        // ==> ne veut rien dire
        //this.setSate = { secureTextEntry: true };

        // OK
        this.state = {
            email: '',
            password: '',
            secureTextEntry: true
        };
    };
    handleEmailChange = (value) => {
        this.setState({ email: value });
    }

    handlePasswordChange = (value) => {
        this.setState({ password: value });
    }
    handleToggleSecureTextEntry = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }
    render() {
        // dereferencement des variables très bien
        const { email, password, secureTextEntry } = this.state;
        const enabled =
            email.length > 0 &&
            password.length > 0;
        return (
            <View style={{ backgroundColor: '#008489', flex: 1, flexDirection: 'column' }}>
                <View style={{ alignSelf: 'flex-start' }}>
                    <Text style={{ color: 'white', fontSize: 30, marginTop: 25, marginLeft: 22 }}>
                        Connexion
                </Text>
                </View>
                <View style={{ alignSelf: 'flex-start' }}>
                    <Text style={{ color: 'white', fontSize: 20, marginTop: 50, marginLeft: 22 }}>
                        Email
                    </Text>
                    <TextInput
                        style={{ height: 40, width: 350, borderBottomColor: '#77b5fe', borderBottomWidth: 1, marginLeft: 22, color: 'white' }}
                        type="text"
                        value={this.state.email}
                        onChangeText={this.handleEmailChange}
                    />
                    <View style={{ flexDirection: "row", }}>
                        <Text style={{ color: 'white', fontSize: 20, marginTop: 50, marginLeft: 22 }}>Mot de passe </Text>
                        <TouchableOpacity onPress={this.handleToggleSecureTextEntry}>
                            <Text style={{ color: 'white', fontSize: 20, marginTop: 50, marginLeft: 170 }} >{secureTextEntry ? 'Show' : 'Hide'}</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput
                        style={{ height: 40, width: 350, borderBottomColor: '#77b5fe', borderBottomWidth: 1, marginLeft: 22, color: 'white' }}
                        value={this.state.password}
                        onChangeText={this.handlePasswordChange}
                        type={password}
                        secureTextEntry={secureTextEntry}
                    />
                </View>
                <View style={{ alignSelf: 'center', marginTop: 50 }}>
                    <Button
                        disabled={!enabled}
                        style={{ color: 'white', fontSize: 20, marginTop: 50, alignSelf: 'center' }}
                        title="Press me"
                    />
                </View>
            </View>
        );
    }
}