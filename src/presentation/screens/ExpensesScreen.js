import React from 'react';
import { SafeAreaView, Text, Button, Image, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import IconFeather from 'react-native-vector-icons/Feather'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconEntypo from 'react-native-vector-icons/Entypo'
import Expenses from '../../Data/Expenses';
import Box from '../components/Box'
const ExpensesScreen = ({navigation}) => {
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
              <Text style={{ fontSize: 27, color: '#707070' }}> Expenses </Text>
            </View>
          </View>
  
        </View>
  
  
  
  
  
  
  
        <View style={{ height: '100%', flexDirection: 'column', backgroundColor: '#F6F6F6' }}>
          <View style={{ width: '100%', height: '79%', paddingHorizontal: 20, paddingVertical: 25 }}>
               <FlatList 
          numColumns={3}
          showsVerticalScrollIndicator ={false}
          data={Expenses}
          renderItem={({item})=>(
            <TouchableOpacity >
            <Box  title={item.name} />
            </TouchableOpacity>
           
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


export default ExpensesScreen;