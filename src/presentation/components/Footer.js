import React from 'react';
import { SafeAreaView,Text,Button,Image,StyleSheet,View,TouchableOpacity} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconEntypo from 'react-native-vector-icons/Entypo'
const Footer = (props) => {
(
    <View style={{height:'20%',backgroundColor:'#F6F6F6',justifyContent:'center'}}>

<View style={{paddingHorizontal:50,paddingVertical:15,backgroundColor:'white',flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={{flexDirection:'column',justifyContent:'center'}}>
           <IconEntypo name="home" style={{fontSize:22,paddingLeft:5}} />
           <Text>Home</Text>
           </TouchableOpacity>
           <TouchableOpacity >
          <View style={{ justifyContent:'center',backgroundColor:'#0DAE9F',width:45,height:45,borderRadius:50,paddingHorizontal:6}}>
            <IconIonicons name="add" style={{fontSize:35,color:'#FFFF'}}/>
          </View>

           </TouchableOpacity>
           <TouchableOpacity style={{flexDirection:'column',justifyContent:'center'}}>
          <IconFeather name="trending-up" style={{fontSize:22,paddingLeft:8}}/>
           <Text>Report</Text>
           </TouchableOpacity>
          </View>
</View>
)
}
export default Footer;