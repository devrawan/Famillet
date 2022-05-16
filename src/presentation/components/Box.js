import React from 'react';
import { SafeAreaView,Text,Button,Image,StyleSheet,View,TouchableOpacity} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
const Box = (props) => {
    return (
        <View style={styles.container}>
           <View style={styles.row_1}>
           <View style={styles.icon_circle}>
           <IconFontAwesome name='dollar' style={styles.icon_style}/>
    </View>
          </View>
          <View style={styles.row_2}>
            <Text style={styles.text_style}>{props.title}</Text>
          </View>
    
    </View>
    )};


    const styles = StyleSheet.create({
        container: {
            marginVertical:10,
            marginHorizontal:8,
            width:100,
            height:100,
            backgroundColor:'#FFFF',
            margin:3, 
            borderRadius: 10,
            shadowColor: '#0000000F',
            shadowOffset:
             {
              width: 0,
              height: 3
            },
            shadowRadius: 5,
            shadowOpacity: 1.0,
            padding:5,
            paddingBottom:8,
            justifyContent:'center'
        },
        row_1:{
            paddingVertical:5,
            flexDirection:'row',
            justifyContent:'center',
            marginVertical:5
        },
        row_2:{
            flexDirection:'row',
            justifyContent:'center',
            marginVertical:2
        },
        icon_circle:{
            width:55,
            height:55,
            backgroundColor:'#0DAE9F',
            borderRadius:50,
            flexDirection:'row',
            justifyContent:'center'
        },
        icon_style:{
            fontSize:40,
            marginVertical:7,
            color:'#FFFF',
            
        },
        text_style:{
            color:'#0DAE9F',
            fontSize:13
        }


      })
    export default Box;