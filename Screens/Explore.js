import React, { Component } from 'react'
import {
    StyleSheet, View,Text,Button
  } from 'react-native';

export default class Explore extends Component {
    render() {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>
                    Explore Screen
                </Text>
                <Button title="Go to Detail page "
                 onPress={() => this.props.navigation.navigate("Detail")}
                 />
            </View>
        )
    }
}
