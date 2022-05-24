import React from 'react';
import { SafeAreaView, Text, Button, Image, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IncomeBox from '../components/IncomeBox';
import IconFeather from 'react-native-vector-icons/Feather'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconEntypo from 'react-native-vector-icons/Entypo'
import Income from '../../Data/Income';

const SavingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFF' }}>
  <View style={{ paddingHorizontal: 12, paddingVertical: 5, backgroundColor: '#FFFF', height: '13%', flexDirection: 'column' }}>
        <View style={{ marginVertical: 7, paddingHorizontal: 5, flexDirection: 'row' }}>

          <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>

            <TouchableOpacity style={{ marginTop: 5 }} onPress={() => { navigation.navigate('HomeScreen') }}>
              <IconAntDesign name="left" style={{ color: '#707070', fontSize: 22 }} />
            </TouchableOpacity>
          </View>

          <View style={{ backgroundColor: 'white', paddingHorizontal: 10, width: "80%", alignItems: 'center', justifyContent: "center" }}>
            <Text style={{ fontSize: 27, color: '#707070' }}> Saving </Text>
          </View>
        </View>


        <View style={{ marginVertical: 0, paddingHorizontal: 5, flexDirection: 'row', justifyContent: 'center' }}>

          <View style={{ backgroundColor: 'white', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 17, color: '#707070' }}> The total amount :  </Text>
            <Text style={{ fontSize: 17, color: '#707070' }}> 500$</Text>

          </View>
        </View>
      </View>

      <View style={{ height: '100%', flexDirection: 'column', backgroundColor: '#F6F6F6' }}>

        <View style={{ width: '100%', height: '79%', paddingHorizontal: 30, paddingVertical: 15 }}>
          {/* <IncomeBox  month="January" amount="20"/>
   <IncomeBox  month="October" amount="50"/>
   <IncomeBox  month="Sebtember" amount="60"/>
   <IncomeBox  month="January" amount="50"/> */}
          <FlatList
            numColumns={1}
            showsVerticalScrollIndicator={false}
            data={Income}
            renderItem={({ item }) => (
              <IncomeBox month={item.month} amount={item.amount} />


            )}
          />
        </View>







        {/* <View style={{height:'20%',backgroundColor:'#F6F6F6'}}>

<View style={{paddingHorizontal:50,paddingVertical:10,backgroundColor:'white',flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}}
           style={{flexDirection:'column',justifyContent:'center'}}>
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
</View> */}


      </View>




    </SafeAreaView>


  );
};



export default SavingScreen;