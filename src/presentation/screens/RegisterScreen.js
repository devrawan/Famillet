import React, { useState, useEffect } from 'react';
import { TextInput, ImageBackground, SafeAreaView, Text, Button, Image, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import pro_image from '../../assets/pro_image.png'
import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import LockIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import GenderIcon from 'react-native-vector-icons/MaterialIcons'
import { Dropdown } from 'react-native-element-dropdown';
import background from '../../assets/background.png'
import AntDesign from 'react-native-vector-icons/AntDesign';
import TrIcon from 'react-native-vector-icons/Entypo'
import Users from '../../Data/Users';
import * as ImagePicker from 'react-native-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

const p = []
var isShow = false
const data = [
  { label: 'Palestine', value: '1' },
  { label: 'America', value: '2' },
  { label: 'Egypt', value: '3' },
  { label: 'Soudan', value: '4' },
  { label: 'Russia', value: '5' },

];

const City = [
  { label: 'Gaza', value: '1' },
  { label: 'Nasser', value: '2' },
  { label: 'North', value: '3' },

];

const RegisterScreen = ({ navigation }) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [password2, setpassword2] = useState('')

  const [gender, setGender] = useState('')
  const [value, setValue] = useState('');
  const [CValue, setCValue] = useState('')



  const [users, setUsers] = useState([Users])

  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    console.log("value of 'photo' changed to", photo);
  }, [photo]);
  const handleChoosePhoto = () => {
    const options = {
      noData: true
    };

    ImagePicker.launchImageLibrary(options, res => {
      if (res != undefined && res.assets != undefined) {
        if (res.assets.length > 0) {
          const url = res.assets[0].uri
          isShow = true
          console.log(res)
          console.log(url)
          // p.push(url)

          setPhoto(url)
        }
      }

    })

  }

  const renderItem = (item) => {
    return (
      <View >
        <Text  style={{ padding:10, flex: 1, fontSize: 16 }}>{item.label}</Text>
        {item.value === value && (
          <AntDesign
            style={{ marginRight: 5, }}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };
  console.log("kareem");
  console.log(photo);
  return (

    <SafeAreaView style={{ height: '100%', width: '100%', backgroundColor: '#0DAE9F' }}>
      <KeyboardAwareScrollView>


        <ImageBackground source={background} style={{ height: 205, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={handleChoosePhoto} style={{ backgroundColor: 'white', height: 150, width: 150, borderRadius: 120, marginTop: 10 }}>
            <Image
              source={(photo != null) ? { uri: photo } : pro_image} style={{ backgroundColor: 'white', height: 150, width: 150, borderRadius: 120, marginTop: 0 }}
            />
          </TouchableOpacity>
        </ImageBackground>

        <View style={{ flexDirection: 'column', width: '100%', paddingHorizontal: 25, height: '100%', backgroundColor: 'white', paddingTop: 10 }}>

          <View style={styles.BoxIfo}>
            <AccountIcon name='account-circle' style={{ color: '#D2D2D2', fontSize: 25 }} />
            <TextInput onChangeText={setName}
              value={name} placeholder=" Enter your user name" style={{ marginHorizontal: 10 }} />
          </View>

          <View style={styles.BoxIfo}>
            <EmailIcon name='email' style={{ color: '#D2D2D2', fontSize: 25 }} />
            <TextInput onChangeText={setEmail}
              value={email} placeholder=" Enter your user email" style={{ marginHorizontal: 10 }} />
          </View>

          <View style={styles.BoxIfo}>
            <LockIcon name='lock' style={{ color: '#D2D2D2', fontSize: 25 }} />
            <TextInput
              // secureTextEntry = {true}  
              onChangeText={setpassword}
              value={password}
              placeholder=" Enter your  password" style={{ marginHorizontal: 10 }} />
          </View>

          <View style={styles.BoxIfo}>
            <LockIcon name='lock' style={{ color: '#D2D2D2', fontSize: 25 }} />
            <TextInput
              // secureTextEntry = {true}  
              onChangeText={setpassword2}
              value={password2} placeholder=" Confirm your password" style={{ marginHorizontal: 10 }} />

          </View>

          <View style={styles.BoxIfo}>
            <GenderIcon name='supervisor-account' style={{ color: '#D2D2D2', fontSize: 25 }} />
            <TextInput onChangeText={setGender}
              value={gender} placeholder=" Gender" style={{ marginHorizontal: 10 }} />
          </View>

          {/* <View style={{
                    flexDirection: 'row', backgroundColor: 'white', borderRadius: 5,
                    marginVertical: 5, justifyContent: 'center'
                }}>
                    <TextInput style={{ marginHorizontal: 10, width: 160, ...styles.TextFieldStyle }} placeholder=" Country " />
                    <TextInput style={{ marginHorizontal: 10, width: 160, ...styles.TextFieldStyle }} placeholder=" City " />
                </View> */}
          <View style={{

            backgroundColor: 'red',
            width: '100%', flexDirection: 'row', backgroundColor: 'white', borderRadius: 5,
            marginVertical: 5, justifyContent: 'center'
          }}>

            <Dropdown
              style={{
                marginHorizontal: 3,
                marginVertical: 5,
                height: 50,
                width: 160,
                borderWidth: 1,
                borderColor: '#4E4E4E',
                borderRadius: 5,
                borderRadius: 12,
                padding: 12,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                shadowRadius: 1.41,

                elevation: 2,
              }}
              placeholderStyle={{ fontSize: 16 }}
              selectedTextStyle={{ fontSize: 16 }}
              inputSearchStyle={{
                height: 40,
                fontSize: 16
              }}
              iconStyle={{
                width: 20,
                height: 20,
              }}
              data={data}
              // search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="Country"
              searchPlaceholder="Search.."
              value={CValue.value}
              onChange={item => {
                setCValue(item);
              }}
              // renderLeftIcon={() => (
              //   <TrIcon style={ {marginRight: 5}} color="#0DAE9F" name="triangle-down" size={20} />
              // )}
              renderItem={renderItem}
            />


            <Dropdown
              style={{
                marginVertical: 5,
                height: 50,
                width: 160,
                borderWidth: 1,
                borderColor: '#4E4E4E',
                borderRadius: 12,
                // padding: 12,
                shadowColor: '#4E4E4E',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.2,
                // shadowRadius: 1.41,

                elevation: 1,
              }}
              placeholderStyle={{ fontSize: 16 }}
              selectedTextStyle={{ fontSize: 16 }}
              inputSearchStyle={{
                height: 50,
                fontSize: 16
              }}
              iconStyle={{
                width: 20,
                height: 20,
              }}
              data={City}
              // search
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="City"
              searchPlaceholder="Search..."
              value={value.value}
              onChange={item => {
                console.log("mmmmmmmmmmmmmm");
                console.log(item);
                console.log(item.value);

                setValue(item);
              }}
              // renderLeftIcon={() => (
              //   <TrIcon style={ {marginRight: 5}} color="#0DAE9F" name="triangle-down" size={20} />
              // )}
              renderItem={renderItem}
            />
          </View>





          <TouchableOpacity
            style={{ height: 55, backgroundColor: '#0DAE9F', justifyContent: 'center', marginVertical: 5, width: 230, marginLeft: 55, borderRadius: 8 }}>
            <Button
              onPress={() => {
                Users.push({ key: "986", name: name, email: email, password: password, gender: gender, country: CValue.label, city: value.label, balance: "0.0" })
                setUsers([Users])
                console.log(Users)
                navigation.navigate('HomeScreen')
              }}
              title='Register' color="white" />
          </TouchableOpacity>


         <Button
              onPress={() => {
                // navigation.pop();
                navigation.pop();
              }}
              title='Back' color="#0DAE9F" />

        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>


  );
};

const styles = StyleSheet.create({
  TextFieldStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    alignContent: 'flex-start',
    borderColor: '#4E4E4E',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 15,
    fontSize: 15

  },
  BoxIfo: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: '#4E4E4E',
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 15,
    fontSize: 15,
    marginVertical: 10
  }
})


export default RegisterScreen;