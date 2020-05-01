import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity
  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Splash = ({navigation}) =>{
        return (
            <View style={styles.cantainer}>
                <View style={styles.header}>
                    <Animatable.Image
                     animation='bounce'
                     duraton = "1500"
                    source ={require('../components/images/logo.png')}
                    style={styles.logo}
                    />
                </View>
                <Animatable.View style={styles.footer} animation="fadeInUpBig">
                    <Text style = {styles.title}>Stay Connected with EveryOne</Text>
                    <Text style = {styles.text}>Sign in with account</Text>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                            <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signin}
                            >
                                <Text style={styles.textSign}>Get Started</Text>
                                <MaterialIcons
                                    name="navigate-next"
                                    color='#fff'
                                    size={20}
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        )
    }

export default Splash;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    cantainer:{
        flex:1,
        backgroundColor:'#009387',
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    footer:{
        flex:1,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:30,
        paddingVertical:50,
    },
    logo:{
        width:height_logo,
        height:height_logo,
    },
    title:{
        color:'#05375a',
        fontSize:30,
        fontWeight:'bold',
    },
    text:{
        color:'grey',
        marginTop:5,
    },
    button:{
        alignItems:'flex-end',
        marginTop:30,
    },
    signin:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row',
    },
    textSign:{
        color:'white',
        fontWeight:'bold',
    },
});
