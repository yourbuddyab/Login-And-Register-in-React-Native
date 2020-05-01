import React from 'react';
import { 
    DrawerContentScrollView,
    DrawerItem
 } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
 import {
     Avatar,
     Title,
     Text,
     Caption,
     Paragraph,
     Drawer,
     TouchableRipple,
     Switch,
     ToggleButton
 } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { AuthContext } from '../components/Context';

 export function DrawerContent(props){

     const [isDarkTheme, setIsDarkTheme] = React.useState(false);
     const { signOut } = React.useContext(AuthContext);
     const toggletheme = () => {
         setIsDarkTheme(!isDarkTheme);
     }

     return(
         <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row', marginTop:15}}>
                            <Avatar.Image 
                                source={{
                                    uri:'https://scontent.fixc7-1.fna.fbcdn.net/v/t31.0-1/p160x160/16300224_721266551362887_988867862303787986_o.jpg?_nc_cat=101&_nc_sid=dbb9e7&_nc_ohc=oXub3nnlR0sAX_bgJ5C&_nc_ht=scontent.fixc7-1.fna&_nc_tp=6&oh=f42f0a68633432c2f867b87b8ce5517f&oe=5ED1039F'
                                }}
                                size={50}
                            />  
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Arjun Bhati</Title>
                                <Caption style={styles.caption}>@yourbuddyab</Caption>
                            </View>
                        </View>
                    </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                        <Icon
                        name="home-outline"
                        color ={color}
                        size={size}
                        />)}
                        label ="Home"
                        onPress ={()=>{props.navigation.navigate('Home')}}
                    >
                    </DrawerItem>
                    <DrawerItem 
                        icon={({color, size}) => (
                        <Icon
                        name="account-outline"
                        color ={color}
                        size={size}
                        />)}
                        label ="Profile"
                        onPress={()=>{props.navigation.navigate('Profile')}}
                    >
                    </DrawerItem>
                    <DrawerItem 
                        icon={({color, size}) => (
                        <Icon
                        name="bookmark-outline"
                        color ={color}
                        size={size}
                        />)}
                        label ="BookMarks"
                    >
                    </DrawerItem>
                    <DrawerItem 
                        icon={({color, size}) => (
                        <Icon
                        name="settings-outline"
                        color ={color}
                        size={size}
                        />)}
                        label ="Setting"
                        onPress={() => {props.navigation.navigate('Setting')}}

                    >
                    </DrawerItem>
                    <DrawerItem 
                        icon={({color, size}) => (
                        <Icon
                        name="account-check-outline"
                        color ={color}
                        size={size}
                        />)}
                        label ="Support"
                        onPress={() => {props.navigation.navigate('Support')}}
                    >
                    </DrawerItem>
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => {toggletheme()}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents='none'>
                                <Switch value={isDarkTheme} />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                 icon={({color, size}) => (
                     <Icon
                     name="exit-to-app"
                     color ={color}
                     size={size}
                     />
                 )}
                 label ="Sign Out"
                 onPress={() => {signOut()}}
                />
            </Drawer.Section>
         </View>
     );
 }

 const styles = StyleSheet.create({
     drawerContent:{
         flex:1,
     },
     userInfoSection:{
         paddingLeft:20,
     },
     title: {
         fontSize:16,
         marginTop:3,
         fontWeight:'bold',
     },
     caption:{
         fontSize:14,
         lineHeight:14,
     },
     row:{
         marginTop:20,
         flexDirection:'row',
         alignItems:'center',
     },
     section:{
         flexDirection:'row',
         alignItems:'center',
         marginRight:15,
     },
     paragraph:{
         fontWeight:'bold',
         marginRight:3,
     },
     drawerSection:{
         marginTop:13,
     },
     bottomDrawerSection:{
         marginTop:15,
         borderTopColor:'#f4f4f4',
         borderTopWidth:1,
     },
     preference:{
         flexDirection:'row',
         justifyContent:'space-between',
         paddingVertical:12,
         paddingHorizontal:16,
     },
 });
