import React from 'react';
import { SafeAreaView,Text,Button,Image,StyleSheet,View,TouchableOpacity} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ObjInfo from '../../Data/ObjInfo';
const ObjBox = (props) => {
    return (
        <View style={{marginVertical:5,justifyContent:'center',backgroundColor:'#FFF',height:75,width:"100%",borderRadius: 10,
            shadowColor: '#0000000F',
            shadowOffset:
             {
              width: 0,
              height: 3
            }, shadowRadius: 5, shadowOpacity: 1.0}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center',paddingHorizontal:25}}>
              <Text style={{fontSize:20,color:`${props.color}`}}>{props.title}</Text>
              {/* <Text style={{color:'#707070',fontSize:20}}>{props.rate}</Text> */}
              <View style={{flexDirection:'row',justifyContent:'center',paddingLeft:10,paddingTop:2,width:140}}>
              <AirbnbRating
            showRating={false}
            count={5}
            selectedColor={`${props.color}`}
            defaultRating={props.rate}
            size={15}
           
          
          />
              </View>
              <Text style={{fontSize:20,color:`${props.color}`}}>{`${props.value} `}</Text>
              </View>


            </View>
    )};

    export default ObjBox ;
