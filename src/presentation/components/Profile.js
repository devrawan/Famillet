
import React from 'react';
import { SafeAreaView,Text,Button,Image,StyleSheet,View,TouchableOpacity} from 'react-native';
import placeholder from '../../assets/placeholder.png'
const Profile = (props) => {
    return (
        
        <View style={{marginVertical:10,marginHorizontal:10,backgroundColor:'#FFFF',width:130,height:130,flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:10,shadowColor: '#0000000F',
        shadowOffset:
         {
          width: 0,
          height: 3
        }, shadowRadius: 5, shadowOpacity: 1.0}}>
          <Image source={placeholder} style={{borderWidth:1,borderColor:'#F6F6F6',justifyContent:'center',width:90,height:90,borderRadius:50}}/>
         <Text style={{fontSize:12,paddingVertical:5}}>{props.name}</Text>
      </View>
    )};

    export default Profile ;
