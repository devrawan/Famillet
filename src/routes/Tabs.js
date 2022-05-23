import React from 'react';
import { SafeAreaView,Text,Button,Image,StyleSheet,View,TouchableOpacity,FlatList} from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../presentation/screens/HomeScreen'
import ReportScreen from "../presentation/screens/ReportScreen";

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
    onPress={onPress}>
        <View style={{width:70,height:70,borderRadius:35,backgroundColor:'#0DAE9F'}}>
            {children}
        </View>
    </TouchableOpacity>
)

const Tabs = ({ route, navigation }) =>{
    console.log("sssssss");
    console.log(route.params);

    const { user } =  route.params ;
    console.log("ddsssdddss");
    console.log(user);
return( 
    <Tab.Navigator 
    screenOptions={({ route }) => (
    
        {
    

            
        tabBarStyle: {paddingTop:30,justifyContent:'center', alignItems:'center',position: 'absolute',bottom:25,elevation:0,height:80,paddingHorizontal:15 },
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
          return <MaterialIcon  name={iconName} size={28} color={color} style={{height:40,marginBottom:10}} />
 
        
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


        <Tab.Screen  name=" " component={AddScreen} 
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
                        <CustomTab {...props}/>
                    )
                }} />




        <Tab.Screen name="Report" component={ReportScreen}
         options={{
           
            tabBarLabelStyle: {
                fontSize: 13,
            } }} />







    </Tab.Navigator>
)
}
export default Tabs;