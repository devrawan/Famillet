import React ,{useState} from 'react';
import { SafeAreaView, Text, Button, Image, StyleSheet, View, FlatList,TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconEntypo from 'react-native-vector-icons/Entypo'
import Box from './../components/Box'
import Categories from '../../Data/Categories';
import IconFeather from 'react-native-vector-icons/Feather'
import IconIonicons from 'react-native-vector-icons/Ionicons'
const HomeScreen = () => {
  const [categories,setCategories]=useState([Categories])
  return (
    <SafeAreaView style={{ flex:1,height: '100%', width: '100%', backgroundColor: '#0DAE9F' }}>
      <View style={{ backgroundColor: '#0DAE9F', paddingHorizontal: 17, height: '27%', flexDirection: 'column', alignItems: 'center' }}>
        <View style={{  marginHorizontal: 5, flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <IconAntDesign name="left" style={{ color: '#FFFF', fontSize: 22 }} />
          <IconEntypo name="menu" style={{ color: '#FFFF', fontSize: 28 }} />

        </View>
        <View style={{ marginTop: 5, marginBottom: 15, backgroundColor: '#FFFF', height: 100, width: 100, borderRadius: 120 }}></View>
        <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={{ color: '#FFFF', fontSize: 18 }}>Ola Ahmed  </Text>
        </View>
        <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'center', marginVertical: 2 }}>
          <Text style={{ color: '#FFFF', fontSize: 18 }}>Current Balance $100,000 </Text>
        </View>
      </View>



      <View style={{backgroundColor: '#F6F6F6',flexDirection:'column'}}>
          
          <View style={{height:470,backgroundColor:'#F6F6F6', paddingHorizontal:25,justifyContent:'center',paddingTop:7}}>
          <FlatList 
          numColumns={3}
          showsVerticalScrollIndicator ={false}
          data={Categories}
          renderItem={({item})=>(
            <Box  title={item.name}/>
          )}
          />
          </View>
<View style={{height:'20%',backgroundColor:'#F6F6F6',justifyContent:'center'}}>

<View style={{paddingHorizontal:50,paddingVertical:15,backgroundColor:'white',flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={{flexDirection:'column',justifyContent:'center'}}>
           <IconEntypo name="home" style={{fontSize:22,paddingLeft:5}} />
           <Text>Home</Text>
           </TouchableOpacity>
           <TouchableOpacity >
          <View style={{ justifyContent:'center',backgroundColor:'#0DAE9F',width:45,height:45,borderRadius:50,paddingHorizontal:6}}>
            <IconIonicons name="add" style={{fontSize:35,color:'#FFFF'}}/>
          </View>

           </TouchableOpacity>
           <TouchableOpacity style={{flexDirection:'column',justifyContent:'center'}}>
          <IconFeather name="trending-up" style={{fontSize:22,paddingLeft:8}}/>
           <Text>Report</Text>
           </TouchableOpacity>
          </View>
</View>
        
       
      
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

})


export default HomeScreen;