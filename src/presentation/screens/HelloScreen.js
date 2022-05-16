import React from 'react';
import { SafeAreaView,Text,Button,Image,StyleSheet,View,TouchableOpacity} from 'react-native';

const HelloScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.Container}>
         <TouchableOpacity style={{flexDirection:'row',justifyContent:'center'}}>
         <Button title='مرحبا' onPress={()=>{navigation.navigate('LoginScreen')}}/>
             
         </TouchableOpacity>
          
           
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Container: {
  
      flex: 1,
      flexDirection: 'column',
      justifyContent:'center',
     backgroundColor:'white'
    }
  })


export default HelloScreen;