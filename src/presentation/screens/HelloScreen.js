import React from 'react';
import { SafeAreaView,Text,Button,Image,StyleSheet,View,TouchableOpacity} from 'react-native';
import HPhpto from '../../assets/HPhpto.png'
const HelloScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.Container}>

          <View style={{marginVertical:40}}> 
            <Image source={HPhpto}/>
          </View>
          <View style={{marginHorizontal:20,marginVertical:20}}>
          <Text style={{color:'white',fontSize:16}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
          </View>
        
         <TouchableOpacity style={{marginTop:40,height:55,backgroundColor:'white',justifyContent:'center',width:230,borderRadius:8}}>
         <Button color={'#0DAE9F'} title='Get Started' onPress={()=>{navigation.navigate('LoginScreen')}}/>
         </TouchableOpacity>
          
           
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    Container: {
      flex: 1,
      justifyContent:'center',
      flexDirection: 'column',
      alignItems:'center',
     backgroundColor:'#0DAE9F'
    }
  })


export default HelloScreen;