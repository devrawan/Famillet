import React from 'react';
import { SafeAreaView,Text,Button,Image,StyleSheet,View,TouchableOpacity,FlatList} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconFeather from 'react-native-vector-icons/Feather'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import Box from '../components/Box';
import Profile from '../components/Profile';
import ObjBox from '../components/ObjBox';
import Categories from '../../Data/Categories';
import Users from '../../Data/Users';
import placeholder from '../../assets/placeholder.png'

const ReportScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFF' }}>

        <View style={{ paddingHorizontal: 12, paddingVertical: 17, backgroundColor: '#FFFF', height: '13%', flexDirection: 'column' }}>
          <View style={{ marginVertical: 7, paddingHorizontal: 5, flexDirection: 'row' }}>
            <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
              <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                <IconAntDesign name="left" style={{ color: '#707070', fontSize: 22 }} />
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: 'white', paddingHorizontal: 10, marginLeft: 70 }}>
              <Text style={{ fontSize: 27, color: '#707070' }}> Reports </Text>
            </View>
          </View>
  
        </View>
  
  
  
  
  
  
  
        <View style={{ height: '100%', flexDirection: 'column', backgroundColor: '#F6F6F6' }}>
          <View style={{ backgroundColor:'#F6F6F6',width: '100%', height: '79%', paddingHorizontal: 20, paddingVertical: 25 }}>
               <FlatList 
          horizontal
          showsHorizontalScrollIndicator ={false}
          data={Expenses}
          renderItem={({item})=>(
            <TouchableOpacity >
           
            <View style={{marginVertical:10,marginHorizontal:10,backgroundColor:'#FFFF',width:90,height:90,flexDirection:'column',justifyContent:'center',alignItems:'center',borderRadius:10,shadowColor: '#0000000F',
        shadowOffset:
         {
          width: 0,
          height: 3
        }, shadowRadius: 5, shadowOpacity: 1.0}}>
          <Image source={placeholder} style={{borderWidth:1,borderColor:'#C8C8C8',justifyContent:'center',width:60,height:60,borderRadius:50}}/>
         <Text style={{fontSize:12,paddingVertical:0}}>kk</Text>
      </View>
            </TouchableOpacity>
           
          )}
          />
<FlatList 
          numColumns={1}
          showsVerticalScrollIndicator ={false}
          data={Users}
          renderItem={({item})=>(
           <ObjBox />
   
           
          )}
          />

          </View>
  
  
  
  
  
  
  
  
  
  
  
  
  
          {/* <View style={{ height: '20%', backgroundColor: '#F6F6F6' }}>
  
            <View style={{ paddingHorizontal: 50, paddingVertical: 10, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }}
                style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <IconEntypo name="home" style={{ fontSize: 22, paddingLeft: 5 }} />
                <Text>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity >
                <View style={{ justifyContent: 'center', backgroundColor: '#0DAE9F', width: 45, height: 45, borderRadius: 50, paddingHorizontal: 6 }}>
                  <IconIonicons name="add" style={{ fontSize: 35, color: '#FFFF' }} />
                </View>
  
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { navigation.navigate('ReportScreen') }} style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <IconFeather name="trending-up" style={{ fontSize: 22, paddingLeft: 8 }} />
                <Text>Report</Text>
              </TouchableOpacity>
            </View>
          </View> */}
  
  



  
        </View>
  
  
  
  
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


export default ReportScreen;