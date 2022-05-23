//ObjectivesScreen
import React from 'react';
import { SafeAreaView, Text, Button, Image, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IncomeBox from '../components/IncomeBox';
import IconFeather from 'react-native-vector-icons/Feather'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconEntypo from 'react-native-vector-icons/Entypo'
import ObjBox from './../components/ObjBox'
import ObjInfo from '../../Data/ObjInfo';
const ObjectivesScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFF' }}>

      <View style={{ paddingHorizontal: 12, paddingVertical: 17, backgroundColor: '#FFFF', height: '13%', flexDirection: 'column' }}>
        <View style={{ marginVertical: 7, paddingHorizontal: 5, flexDirection: 'row' }}>
          <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
            <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }}>
              <IconAntDesign name="left" style={{ color: '#707070', fontSize: 22 }} />
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: 'white', paddingHorizontal: 10, marginLeft: 60 }}>
            <Text style={{ fontSize: 27, color: '#707070' }}> Objectives </Text>
          </View>
        </View>
        <View style={{ marginVertical: 4, paddingHorizontal: 5, flexDirection: 'row', justifyContent: 'center' }}>

          <View style={{ backgroundColor: 'white', paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ fontSize: 17, color: '#707070' }}> The total amount :  </Text>
            <Text style={{ fontSize: 17, color: '#707070' }}> 500$</Text>

          </View>
        </View>
      </View>


      <View style={{ height: '100%', flexDirection: 'column', backgroundColor: '#F6F6F6' }}>

        <View style={{ width: '100%', height: '79%', paddingHorizontal: 30, paddingVertical: 15 }}>
          <FlatList
            numColumns={1}
            showsVerticalScrollIndicator={false}
            data={ObjInfo}
            renderItem={({ item }) => (
             <TouchableOpacity 
            //  onPress={()=>{ObjInfo.push({ key:"4",
            //  name:"Buy Housse",
            //  rating:"4",
            //  value:"60",
            //  color:'pink'})}}
            >
              <ObjBox  color={item.color} title={item.name}  rate={item.rating} value={item.value}/>
              </TouchableOpacity>

            )}
          />
        </View>








      </View>




    </SafeAreaView>


  );
};



export default ObjectivesScreen;