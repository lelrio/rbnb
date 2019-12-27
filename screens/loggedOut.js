import React, { Component } from 'react';
import { Modal, Text, View, Alert, Image, Button, Icon, TouchableOpacity } from 'react-native';

export default class loggedOut extends Component {

     render() {
          return (
               <View style={{ backgroundColor: '#008489', flex: 1, flexDirection: 'column' }}>
                    <View style={{ alignItems: 'flex-end' }}>
                         <Text style={{ color: 'white', marginRight: 20, marginTop: 15 }} onPress={() => this.props.navigation.navigate('connexion')}>Connexion</Text>
                    </View>
                    <View style={{ alignSelf: 'flex-start', marginTop: 35, marginLeft: 15 }}>
                         <Image
                              style={{ width: 60, height: 60 }}
                              source={require('../airbnb-logo.png')}
                         />
                    </View>
                    <View style={{ alignSelf: 'flex-start' }}>
                         <Text style={{ color: 'white', fontSize: 30, marginTop: 25, marginLeft: 22 }}>
                              Bienvenue sur airbnb.
                 </Text>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                         <TouchableOpacity onPress={this._onPressButton} style={{ alignSelf: "center", borderRadius: 5, height: 50, marginTop: 35, width: 360, alignItems: "center", justifyContent: "center", backgroundColor: "white" }}>
                              <Text style={{ color: '#008489', fontSize: 18 }}> Poursuivre avec facebook</Text>
                         </TouchableOpacity>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                         <TouchableOpacity onPress={this._onPressButton} style={{ alignSelf: "center", borderRadius: 5, height: 50, marginTop: 20, width: 360, alignItems: "center", justifyContent: "center", borderWidth: 3, borderColor: '#d6d7da' }}>
                              <Text style={{ color: "white", fontSize: 18 }}> Créer un compte</Text>
                         </TouchableOpacity>
                    </View>
                    <View style={{ alignSelf: 'flex-start' }}>
                         <Text style={{ color: 'white', fontSize: 20, marginTop: 35, marginLeft: 22 }}>
                              Plus d'options
                 </Text>
                    </View>
                    <View style={{ alignSelf: 'flex-start' }}>
                         <Text style={{ color: 'white', fontSize: 15, marginTop: 15, marginLeft: 22 }}>
                              En appuyant sur Continuer, Créer un compte ou Plus d'options, j'accepte les Conditions générales, les Conditions de service relatives aux paiements, la Politique de confidentialité et la Politique de non-discrimination d'Aibnb.
                  </Text>
                    </View>

               </View>
          );
     }
}