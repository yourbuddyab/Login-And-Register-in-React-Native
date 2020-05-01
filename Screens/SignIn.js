import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Platform,
    Button,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    StatusBar
  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../components/Context';


  const SignIn = ({navigation}) =>{
    const [data, setData] = React.useState({
        username:'',
        password:'',
        check_textInputChange:false,
        secureTextEntry:true,
        isValidUsername: true,
        isValidPassword:true,
    });
  
    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if(val.trim().length >= 4){
          setData({
              ...data,
              username:val,
              check_textInputChange:true,
              isValidUsername: true,

          });
      }else{
          setData({ 
              ...data,
              username:val,
              check_textInputChange:false,
              isValidUsername: false,

          });
      }
    }

    const handlePassword = (val) =>{
            if(val.trim().length >= 8){
                setData({
                    ...data,
                    password:val,
                    isValidPassword:true,
                });
            }else{
                setData({
                    ...data,
                    password:val,
                    isValidPassword:false,
                });
            }
        }
        
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry:!data.secureTextEntry
        });
    }

    const handleIsValidUser = (val) => {
        if(val.trim().length >= 4){
            setData({
                ...data,
                isValidUsername: true,
            })
        }else{
            setData({
                ...data,
                isValidUsername: false,
            })
        }
    }
    const loginHangle = (userName, password) => {
        signIn(userName, password);
    }
   
        return (
            <View style={styles.cantainer}>
                <StatusBar backgroundColor="#009387" barStyle="light-content"/>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome!</Text>
                </View>
                <Animatable.View style={styles.footer} animation="fadeInUpBig">
                    <Text style={styles.text_footer}>Username</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="user-o"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Enter Your Username"
                            autoCapitalize="none"
                            style={styles.textInput}
                            onChangeText ={(val) => textInputChange(val)}
                            onEndEditing={(e) => handleIsValidUser(e.nativeEvent.text)}
                        />
                        {data.check_textInputChange?
                        <Animatable.View
                            animation="bounce"
                         >
                        <Feather
                            name="check-circle"
                            color='green'
                            size={20}
                        />
                        </Animatable.View>
                     :null}
                    </View>
                    {data.isValidUsername ? null :
                    <Animatable.View
                        animation="fadeInLeft"
                        duration={500}
                    >
                        <Text style={styles.errormgs}>Username must be 4 characters long.</Text>
                    </Animatable.View>
                    }
                    <Text style={[styles.text_footer, {marginTop:35}]}>Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color="#05375a"
                            size={20}
                        />
                        <TextInput
                            placeholder="Enter Your Password"
                            autoCapitalize="none"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            onChangeText={(val) => handlePassword(val)}
                        />
                        <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                        <Feather
                            name="eye-off"
                            color='grey'
                            size={20}
                        />
                        :
                        <Feather
                            name="eye"
                            color='grey'
                            size={20}
                        />
                        }
                        </TouchableOpacity>
                    </View>
                    {data.isValidPassword ? null :
                    <Animatable.View
                        animation="fadeInLeft"
                        duration={500}
                    >
                        <Text style={styles.errormgs}>Password must be 8 characters long.</Text>
                    </Animatable.View>
                    }
                    <TouchableOpacity>
                        <Text style={{color:"#009387", marginTop:15}}>Forget Password ?</Text>
                    </TouchableOpacity>
                    <View>
                        <TouchableOpacity
                            style={styles.signin}
                            onPress = {() => {loginHangle( data.username, data.password )}}
                        >
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signin}
                            >
                                <Text style={[styles.textSign, {color:'#fff'}]}>SignIn</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress ={() => navigation.navigate('SignUpScreen')}
                        style={[styles.signin,{
                            borderColor:'#009387',
                            borderWidth:1,
                            marginTop:15
                        }]}
                        >
                            <Text
                            style={[styles.textSign, {color:'#009387'}]}
                            >
                                SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        )
    }
export default SignIn;

const styles = StyleSheet.create({
    cantainer:{
        flex:1,
        backgroundColor:'#009387',
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50,
    },
    footer:{
        flex:3,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30,
    },
    text_header:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:30
    },
    text_footer:{
        color:'#05375a',
        fontSize:18,
    },
    action:{
        flexDirection:'row',
        marginTop:18,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5,
    },
    textInput:{
        flex:1,
        marginTop:Platform.OS == 'ios' ? 0 : -12,
        paddingLeft:10,
        color:'#05375a',
    },
    button:{
        alignItems:'flex-end',
        marginTop:50,
    },
    signin:{
        width:'100%',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    textSign:{
        fontSize:18,
        fontWeight:'bold',
    },
    errormgs:{
        color:'red',
        fontWeight:'bold',
    }
});




