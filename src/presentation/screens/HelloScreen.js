import React from 'react';
import { SafeAreaView, Text, Button, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import HPhpto from '../../assets/HPhpto.png'
const HelloScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.Container}>

      <View style={{ marginVertical: 40 }}>
        <Image source={HPhpto} />
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</Text>
      </View>



      <TouchableOpacity
        style={{ height: 45, backgroundColor: '#fff', justifyContent: 'center', marginVertical: 40, width: "60%", borderRadius: 20 }}

        onPress={() => {
          navigation.navigate('LoginScreen')
        }}>
        <Text style={{ backgroundColor: '#fff', fontWeight: "bold", textAlign: 'center', textAlignVertical: "center", borderRadius: 20, color: "#0DAE9F", height: "100%", width: "100%", justifyContent: 'center' }}
        >Get Started</Text>

      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#0DAE9F'
  }
})


export default HelloScreen;