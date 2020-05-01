import React, { Component } from 'react'
import {
    StyleSheet, View,Text,Button
  } from 'react-native';
  
export default class Detail extends Component {
    render() {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>
                     Screen
                </Text>
                <Button title="Go to Detail page... again "
                 onPress={() => navigation.push("Detail")}
                 />
                 <Button title="Go Back "
                 onPress={() => navigation.goBack()}
                 />
                 <Button title="Go to Home page "
                 onPress={() => navigation.navigate("Detail")}
                 />
                 <Button title="Go to first page "
                 onPress={() => navigation.popToTop()}
                 />
            </View>
        )
    }
}
const styles = StyleSheet.create({
  
});