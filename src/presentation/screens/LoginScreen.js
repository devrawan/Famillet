import React,{useState} from 'react';
import { SafeAreaView,Alert,ImageBackground,Text,Button,Image,StyleSheet,View,TouchableOpacity,TextInput} from 'react-native';
//import TextField from '../components/TextField'
import background from '../../assets/background.png'
import Login_logo from '../../assets/Login_logo.png'
import Users from '../../Data/Users'
const LoginScreen = ({navigation}) => {

  const[email,setEmail] =useState('')
  const [password,setpassword] =useState('')
  // const[users,setUsers] = useState([Users])

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Info ",
      "User Not Found ",
      
      [
        // {
        //   text: "Cancel",
        //   onPress: () => console.log("Cancel Pressed"),
        //   style: "cancel"
        // },

        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

    return (
        <SafeAreaView style={{ height: '100%', width: '100%', backgroundColor: '#0DAE9F' }}>


         {/* <View style={{  height: '27%', flexDirection: 'row' ,justifyContent:'center'}}>  */}
           <ImageBackground   source={background}  style={{   height: 205, flexDirection: 'row' ,justifyContent:'center'}}>
           <Image  source={Login_logo}  style={{marginTop:17}}/>
           </ImageBackground>
 
        {/* </View>  */}

        <View style={{ flexDirection: 'column', width: '100%', paddingHorizontal: 25,  backgroundColor: 'white', paddingTop: 10,height:'100%' }}>
              <View style={{flexDirection:'column',marginTop:50}}>
            <TextInput 
            onChangeText={setEmail}
            value={email}
            autoCapitalize='none'

            style={styles.TextFieldStyle}
              placeholder= " Enter your Gmail "/>
       <TextInput 
       onChangeText={setpassword}
       value={password}
       autoCapitalize='none'

       secureTextEntry = {true}
       style={styles.TextFieldStyle} 
       placeholder= " Enter your password"/>

     </View>
      <Text style={{color:'#0DAE9F',marginLeft:10,fontSize:13}}>
      Forgot your password 
      </Text>

 <TouchableOpacity  
  style={{height:55,backgroundColor:'#0DAE9F',justifyContent:'center',marginVertical:40,width:230,marginLeft:55,borderRadius:20}}

  onPress={()=>{
    var isFound = false;
    for(let i=0; i<Users.length-1 ; i++){
      if(Users[i].email.toUpperCase() ==email.toUpperCase() && Users[i].password.toUpperCase() == password.toUpperCase()){
      //  navigation.navigate('HomeScreen' , { user : "ahmed"}) ;

       navigation.navigate('HomeScreen', {
         user : Users[i],
    
    
      });

      isFound = true;
      }
      
    }
    if (isFound == false){
      {createTwoButtonAlert()}
    }

   }}>
 <Text   style={{backgroundColor:'#0DAE9F', fontWeight:"bold", textAlign: 'center',textAlignVertical: "center", borderRadius:20, color:"#fff", height:"100%",  width:"100%", justifyContent:'center'}}
>LOGIN</Text>

 </TouchableOpacity>

 <View style={{flexDirection:'row',justifyContent:'center',marginHorizontal:10,marginTop:0}}>
 <View
   style={{
       height:10,
    width:145,
     borderBottomColor: 'gray',
     borderBottomWidth: 2,
   }}
 />
 <Text style={{fontSize:13,marginHorizontal:5,justifyContent:'flex-end'}}>OR</Text>
 <View
   style={{
     height:10,
     width:145,
     borderBottomColor: 'gray',
     borderBottomWidth: 2,
   }}
 />
 </View>





 <View style={{flexDirection:'row',justifyContent:'center',marginVertical:10}}>
   <TouchableOpacity onPress={()=>{navigation.navigate("RegisterScreen")}}>
   <Text style={{color:'#0DAE9F',fontSize:13}}>Register a new account</Text>

   </TouchableOpacity>

 </View>

        </View>
    </SafeAreaView>








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