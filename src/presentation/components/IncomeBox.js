import React from 'react';
import { SafeAreaView,Text,Button,Image,StyleSheet,View,TouchableOpacity} from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
const IncomeBox = (props) => {
    return (
        <View style={{marginVertical:5,justifyContent:'center',backgroundColor:'#FFF',height:75,width:"100%",borderRadius: 10,
            shadowColor: '#0000000F',
            shadowOffset:
             {
              width: 0,
              height: 3
            }, shadowRadius: 5, shadowOpacity: 1.0}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:25}}>
              <Text style={{fontSize:20,color:'#07AC9D'}}>{props.month}</Text>
              <Text style={{color:'#707070',fontSize:20}}>{`${props.amount}$`}</Text>
   
              </View>


            </View>
    )};

    export default IncomeBox ;
