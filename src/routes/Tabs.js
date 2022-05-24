import React , {useState} from 'react';
// import { SafeAreaView,Text,Button,Image,StyleSheet,View,TouchableOpacity,FlatList} from 'react-native';
import { TextInput,Pressable,Modal,  FlatList ,Dimensions, ImageBackground, TouchableWithoutFeedback,SafeAreaView, Text, Button, Image, StyleSheet, View, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../presentation/screens/HomeScreen'
import ReportScreen from "../presentation/screens/ReportScreen";
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import Categories from '../Data/Categories';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconEntypo from 'react-native-vector-icons/Entypo'
import AddScreen from '../presentation/screens/AddScreen';
import add from '../assets/add.png'

const Tab = createBottomTabNavigator();
   
const CustomTab =({children,onPress})=>(
    <TouchableOpacity
    style={{top:-30,
    justifyContent:'center',
    alignItems:'center'
    }}
    onPress={onPress}
    >
        
        <View style={{width:70,height:70,borderRadius:35,backgroundColor:'#0DAE9F'}}>
            {children}
        </View>
    </TouchableOpacity>
)


const Tabs = ({ route, navigation }) =>{
    console.log("sssssss");
    console.log(route.params);

    const [modalVisible, setModalVisible] = useState(false);
    const { user } =  route.params ;
    console.log("ddsssdddss");
    console.log(user);

const [boxName , setBoxName] = useState("");


return( 

   
    <>

{modalVisible ? 
<View style={{ width: "100%" , height:"50%" ,position:"absolute" ,zIndex:10, bottom:0  }}>

                        <View style={{
                            flex: 1,
                            justifyContent: "flex-end",
                            alignItems: "center",
                            marginTop: 50,
                        }}>
                            <View style={{
                                // margin: 20,
                                width:'100%',
                                height:200,
                                borderColor:'#0000000F',
                                borderTopLeftRadius:40,
                                borderTopRightRadius:40,
                                borderWidth:1,
                                backgroundColor: "#FFFF",
                                borderRadius: 20,
                                paddingHorizontal: 30,
                                paddingTop:20,
                                shadowColor: "#0000000F",
                                shadowOffset: {
                                    width: 1,
                                    height: 2
                                }
                            }}>
                              
                                <TouchableOpacity  onPress={() => setModalVisible(!modalVisible)}
                                style={{marginBottom:25,justifyContent:'center',alignItems:'flex-end'}}> 
                                     <IconAntDesign name ="close" style={{fontSize:25}}/>
                                     </TouchableOpacity>
                                     
                              
                                <View style={{marginHorizontal:15,flexDirection:'row',height:50,width:'100%',marginBottom:15}}>
                               <Text style={{justifyContent:'flex-start',fontSize:16,marginVertical:15,paddingHorizontal:10}}> Box Name </Text>
                               <TextInput value={boxName} onChangeText={(e)=>{
setBoxName(e);

                               }}  style={{paddingHorizontal:20,backgroundColor:'#0000000F',width:"70%",borderRadius:10}}/>
                                </View>



                                
                                <Pressable
                                    style={{
                                        width:160,
                                        marginLeft:120,
                                        height:40,
                                        borderRadius: 10,
                                        padding: 10,
                                        elevation: 0, backgroundColor: "#0DAE9F"
                                    }}
                                 
                                >
                                   
                                   <TouchableOpacity onPress={() => {

                                       console.log("hi all");
    var category=  { 
        key:"0",
        name: boxName,
        screen:"Income"
        }

    Categories.push(category);
    console.log(Categories);
    setModalVisible(!modalVisible)
    
  setBoxName("");

                                   }}
                                   >

                                  
                                    <Text style={{
                                        color: "white",
                                        fontSize:17,
                                        textAlign: "center"
                                    }}> Save </Text>

</TouchableOpacity>
                                </Pressable>
                            </View>
                        </View>
                    {/* </Modal> */}
                    {/* <Pressable
                        style={{ fontSize: 10, height: 40, borderColor: '#0DAE9F', borderWidth: 1, justifyContent: 'center', marginVertical: 5, width: 110, borderRadius: 8, backgroundColor: '#0DAE9F' }}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={{ color: '#FFFF', fontSize: 18, paddingHorizontal: 5,marginLeft:5 }}>Add Credit</Text>
                    </Pressable> */}



</View>

: <View></View>}
 



    <Tab.Navigator   style= { { zIndex:1,top: 0,  width:"100%" , height:"100%"}}
    
    screenOptions={({ route }) => (
    
        {
    

            
        tabBarStyle: { paddingBottom:3, justifyContent:'center', alignItems:'center',position: 'absolute',bottom:0,elevation:0,paddingHorizontal:15 },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Report') {
            iconName = focused ? 'chart-timeline-variant' : 'chart-timeline-variant';
          }
          else if (route.name === 'Add') {
            iconName = focused ? 'plus' : 'plus';
          }
          return <MaterialIcon  name={iconName} size={28} color={color} style={{marginBottom:0}} />
 
        
        },
        tabBarActiveTintColor: '#07AC9D',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
      })}
      
    >
        <Tab.Screen   name="Home" 
        component={HomeScreen}
        // children={() => <HomeScreen user={user} />}
        initialParams={{ user: user }} //<-- Right here

        options={{
            tabBarLabelStyle: {
                fontSize: 13,
            }

        }} />


        <Tab.Screen  name="  "  
        component={()=> {
            <View></View>
        }}
        // component={ViewModel}

        options={{
            
                   tabBarIcon:({focused})=>(
                        <Image source={add} 
                        resizeMode="contain"
                        style={{
                            width:30,height:30,tintColor:'#ffff',marginTop:10,
                        }}
                        />
                   )
                    ,
                    tabBarButton:(props)=>(
                        
                        <CustomTab {...props  }   onPress={()=> {
                            setModalVisible(true)
                        }}/>

                    )
                }} />




        <Tab.Screen name="Report" component={ReportScreen}
         options={{
           
            tabBarLabelStyle: {
                fontSize: 13,
            } }} />







    </Tab.Navigator>
    
    </>

)
}



export default Tabs;