import React ,{useState} from 'react';
import { SafeAreaView, ImageBackground,Text, View, FlatList,TouchableOpacity ,Image } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconEntypo from 'react-native-vector-icons/Entypo'
import Box from './../components/Box'
import Categories from '../../Data/Categories';
import IconFeather from 'react-native-vector-icons/Feather'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import SonsScreen from './SonsScreen';
import IncomeScreen from './IncomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ObjectivesScreen from './ObjectivesScreen'
import SavingScreen from './SavingScreen';
import DebtsScreen from './DebtsScreen';
import CommitmentsScreen from './CommitmentsScreen';
import ExpensesScreen from './ExpensesScreen'
import placeholder from '../../assets/placeholder.png'
import background from '../../assets/background.png'
import TimelineIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Tabs from '../../routes/Tabs';
import SonInfo from './SonInfo';


const HomeScreen = (  { route ,navigation } ) => {
  const [categories,setCategories]=useState(Categories);
  const [modalVisible, setModalVisible] = useState(false);
const person = route.params.user
console.log(person)
  console.log("dddddddd");
  console.log(route.params);


  // const [cats , setCats] = useState(Categories);



  return (

    <>
   {/* <View
          onWillFocus={() => {
            //Call whatever logic or dispatch redux actions and update the screen!
            setCategories(Categories);
          }}
        /> */}
    <SafeAreaView style={{ flex:1,height: '100%', width: '100%', backgroundColor: '#0DAE9F' }}>
      <ImageBackground source={background} style={{ backgroundColor: '#0DAE9F', paddingHorizontal: 17, height: 205, flexDirection: 'column', alignItems: 'center' }}>
        <View style={{ marginTop:5, marginHorizontal: 5, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <TouchableOpacity onPress={()=>{navigation.navigate('LoginScreen')}}>
          <IconAntDesign name="left" style={{ color: '#FFFF', fontSize: 22 }} />
          </TouchableOpacity>
          

        </View>
       
      
        <View style={{ marginTop: 5, marginBottom: 15, backgroundColor: '#FFFF', height: 100, width: 100, borderRadius: 120  ,justifyContent:'center',alignItems:'center'}}>
       
       
          <Image 
          style={{width:"100%" , borderRadius: 120 , height:"100%"}}
          //  source={ {uri: "file:///data/user/0/com.famillet/cache/rn_image_picker_lib_temp_8d2777f9-e22f-4a8f-92b6-05f737a6f27e.jpg"}} 
          //  source="file:///data/user/0/com.famillet/cache/rn_image_picker_lib_temp_8d2777f9-e22f-4a8f-92b6-05f737a6f27e.jpg"
           source={(person.photo != null) ? { uri: person.photo } : placeholder}
           />

        </View>


        <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'center',marginBottom:3 }}>
          <Text style={{ color: '#FFFF', fontSize: 18 }}> {person.name} </Text>
        </View>
        <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'center', marginVertical: 2 }}>
          <Text style={{ color: '#FFFF', fontSize: 18 }}>{` Current Balance ${person.balance}$`}  </Text>
        </View>
      </ImageBackground>


{/* add height  */}
      <View style={{ height: '100%',backgroundColor: '#F6F6F6',flexDirection:'column'}}>
          
          <View style={{height:470,backgroundColor:'#F6F6F6', paddingHorizontal:25,justifyContent:'center',paddingTop:7}}>
          <FlatList 
          style={{ marginBottom : 100}}
          numColumns={3}
          showsVerticalScrollIndicator ={false}
          data={categories}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>{navigation.navigate(`${item.screen}`)}}>
            <Box  title={item.name}/>
            </TouchableOpacity>
           
          )}
          />
          </View>


         
        
       
      
      </View>
    </SafeAreaView>

    </>
  );
};



const Stackk = createNativeStackNavigator();
const HomeStack =({route , navigation }) => {
  const { user} = route.params;

    return (
    <Stackk.Navigator>
    <Stackk.Screen name="HomeScreen" initialParams={{ user: user }} component={HomeScreen} options={{headerShown:false}} />
      <Stackk.Screen name="SonsScreen" component={SonsScreen} options={{headerShown:false}} />
      <Stackk.Screen name="IncomeScreen" component={IncomeScreen} options={{headerShown:false}} />
      <Stackk.Screen name="ObjectivesScreen" component={ObjectivesScreen} options={{headerShown:false}} />
      <Stackk.Screen name="SavingScreen" component={SavingScreen} options={{headerShown:false}} />
      <Stackk.Screen name="DebtsScreen" component={DebtsScreen} options={{headerShown:false}} />
      <Stackk.Screen name="CommitmentsScreen" component={CommitmentsScreen} options={{headerShown:false}} />
      <Stackk.Screen name="ExpensesScreen" component={ExpensesScreen} options={{headerShown:false}} />
     <Stackk.Screen name="SonInfo" component={SonInfo} options={{headerShown:false}} />

    </Stackk.Navigator>
 
  );
};



export default  HomeStack;