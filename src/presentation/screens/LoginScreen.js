import React from 'react';
import { SafeAreaView,Text,Button,Image,StyleSheet,View,TouchableOpacity,TextInput} from 'react-native';
//import TextField from '../components/TextField'
const LoginScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ height: '100%', width: '100%', backgroundColor: '#0DAE9F' }}>


        <View style={{ backgroundColor: '#0DAE9F', height: '27%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
           
        </View>

        <View style={{ flexDirection: 'column', width: '100%', paddingHorizontal: 25,  backgroundColor: 'white', paddingTop: 10,height:'100%' }}>
              <View style={{flexDirection:'column',marginTop:50}}>
 <TextInput style={styles.TextFieldStyle} placeholder= " Enter your Gmail "/>
       <TextInput style={styles.TextFieldStyle} placeholder= " Enter your password"/>

     </View>
      <Text style={{color:'#0DAE9F',marginLeft:10,fontSize:13}}>
      Forgot your password 
      </Text>

 <TouchableOpacity 
 style={{height:55,backgroundColor:'#0DAE9F',justifyContent:'center',marginVertical:40,width:230,marginLeft:55,borderRadius:8}}>
 <Button
 onPress={()=>{navigation.navigate('RegisterScreen')}}
 title='Login' color="white"/>
 </TouchableOpacity>

 <View style={{flexDirection:'row',justifyContent:'center',marginHorizontal:10,marginTop:90}}>
 <View
   style={{
       height:10,
    width:145,
     borderBottomColor: 'black',
     borderBottomWidth: 2,
   }}
 />
 <Text style={{fontSize:13,marginHorizontal:5,justifyContent:'flex-end'}}>OR</Text>
 <View
   style={{
     height:10,
     width:145,
     borderBottomColor: 'black',
     borderBottomWidth: 2,
   }}
 />
 </View>





 <View style={{flexDirection:'row',justifyContent:'center',marginVertical:10}}>
 <Text style={{color:'#0DAE9F',fontSize:13}}>Register a new account</Text>

 </View>

        </View>
    </SafeAreaView>








//         <View style={{ backgroundColor:'white', flex: 1, flexDirection: 'column'}}>
//     <View style={{height:'30%',backgroundColor:'#0DAE9F'}}>

//     </View>
//     <View style={{marginHorizontal:25}}>

   
//       <View style={{flexDirection:'column',marginTop:70}}>
//       <TextInput style={styles.TextFieldStyle} placeholder= " Enter your Gmail "/>
//       <TextInput style={styles.TextFieldStyle} placeholder= " Enter your password"/>

//      </View>
//      <Text style={{color:'#0DAE9F',marginLeft:10,fontSize:13}}>
//      Forgot your password 
//      </Text>

// <TouchableOpacity 
// style={{height:55,backgroundColor:'#0DAE9F',justifyContent:'center',marginVertical:40,width:230,marginLeft:55,borderRadius:8}}>
// <Button
// onPress={()=>{navigation.navigate('RegisterScreen')}}
// title='Login' color="white"/>
// </TouchableOpacity>

// <View style={{flexDirection:'row',justifyContent:'center',marginHorizontal:10,marginTop:90}}>
// <View
//   style={{
//       height:10,
//    width:145,
//     borderBottomColor: 'black',
//     borderBottomWidth: 2,
//   }}
// />
// <Text style={{fontSize:13,marginHorizontal:5,justifyContent:'flex-end'}}>OR</Text>
// <View
//   style={{
//     height:10,
//     width:145,
//     borderBottomColor: 'black',
//     borderBottomWidth: 2,
//   }}
// />
// </View>





// <View style={{flexDirection:'row',justifyContent:'center',marginVertical:10}}>
// <Text style={{color:'#0DAE9F',fontSize:13}}>Register a new account</Text>

// </View>

//         </View>
//         </View>
    );
};

const styles = StyleSheet.create({
    Container: {
 backgroundColor:'#0DAE9F',
      flex: 1,
      flexDirection: 'column',
    },
    TextFieldStyle: {
        flexDirection:'row',
        justifyContent:'center',
        height:50,
        borderWidth:1,
        alignContent:'flex-start',
        borderColor:'#4E4E4E',
        borderRadius:5,
        marginVertical:10,
        paddingHorizontal:15,
        fontSize:15
        
    }
  })


export default LoginScreen;