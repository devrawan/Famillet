import React from 'react';
import { SafeAreaView, Text, Button, Image, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import Profile from '../components/Profile';
import Income from '../../Data/Income';
import Users from '../../Data/Users';
import SonsArray from '../../Data/SonsArray';
const SonsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFF' }}>

      <View style={{ paddingHorizontal: 12, paddingVertical: 17, backgroundColor: '#FFFF', height: '13%', flexDirection: 'column' }}>
        <View style={{ marginVertical: 7, paddingHorizontal: 5, flexDirection: 'row' }}>
          <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
            <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }}>
              <IconAntDesign name="left" style={{ color: '#707070', fontSize: 22 }} />
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: 'white', paddingHorizontal: 10, marginLeft: 80 }}>
            <Text style={{ fontSize: 27, color: '#707070' }}> Sons </Text>
          </View>
        </View>

      </View>







      <View style={{ height: '100%', flexDirection: 'column', backgroundColor: '#F6F6F6' }}>
        <View style={{ width: '100%', height: '79%', paddingHorizontal: 50, paddingVertical: 25 }}>
          <FlatList 
          numColumns={2}
          showsVerticalScrollIndicator ={false}
          data={SonsArray}
          renderItem={({item})=>(
            <TouchableOpacity
             onPress={() => {
              navigation.navigate('SonInfo', {
                name: item.name,
                email: item.email,
                password:item.password,
                gender:item.gender,
                country:item.country,
                city:item.city,
                balance:item.balance
              });
            }}
            >
           <Profile  name={item.name} /> 
            </TouchableOpacity>
           
           
          )}
          />
        </View>













     


      </View>




    </SafeAreaView>


  );
};



export default SonsScreen;