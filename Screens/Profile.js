import React, { Component } from 'react'
import {
    StyleSheet, View,Text,Button
  } from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text>
                Profile Screen
            </Text>
            <Button title="Go to Detail page "
             onPress={() => this.props.navigation.navigate("Detail")}
             />
        </View>
        )
    }
}
