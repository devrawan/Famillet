import React,{useRef,useState} from 'react';
import { TextInput,Pressable,Modal,Dimensions, ImageBackground, TouchableWithoutFeedback,SafeAreaView, Text, Button, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import pro_image from '../../assets/pro_image.png'
import EmailIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import LockIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import GenderIcon from 'react-native-vector-icons/MaterialIcons'
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import Profile from '../components/Profile';
import background from '../../assets/background.png'
import Login_logo from '../../assets/Login_logo.png'
import Placeicon from 'react-native-vector-icons/MaterialIcons'
import placeholder from '../../assets/placeholder.png'
// import BottomPopup from '../components/BottomPopup';
const SonInfo = ({ route, navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    // let popupRef = useRef()
    const { name, email, gender, country, city, balance } = route.params;
    
   
    // const onShowPopup =()=>{
    //     popupRef.showw()
    // }
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFF' }}>

            <View style={{ paddingHorizontal: 12, paddingVertical: 17, backgroundColor: '#FFFF', height: '13%', flexDirection: 'column' }}>
                <View style={{ marginVertical: 7, paddingHorizontal: 5, flexDirection: 'row' }}>
                    <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
                        <TouchableOpacity onPress={() => { navigation.navigate('SonsScreen') }} >
                            <IconAntDesign name="left" style={{ color: '#707070', fontSize: 22 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: 'white', paddingHorizontal: 10, marginLeft: 90 }}>
                        <Text style={{ fontSize: 27, color: '#707070' }}> profile </Text>
                    </View>
                </View>

            </View>

            <View style={{ flexDirection: 'column', width: '100%', paddingHorizontal: 25, height: '100%', backgroundColor: '#F6F6F6', paddingTop: 10 }}>
                <View style={{ marginTop: 5, marginBottom: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={placeholder} style={{ borderColor: '#0000005C', borderWidth: 1, borderRadius: 100 }} />
                </View>
                <View style={styles.BoxIfo}>
                    <AccountIcon name='account-circle' style={{ color: '#0DAE9F', fontSize: 25 }} />
                    {/* <TextInput placeholder=" Enter your user name"  style={{marginHorizontal:10}}/> */}
                    <Text style={{ marginHorizontal: 10 }}> {name}</Text>
                </View>

                <View style={styles.BoxIfo}>
                    <EmailIcon name='email' style={{ color: '#0DAE9F', fontSize: 25 }} />
                    <Text style={{ marginHorizontal: 10 }}> {email}</Text>
                </View>



                <View style={styles.BoxIfo}>
                    <GenderIcon name='supervisor-account' style={{ color: '#0DAE9F', fontSize: 25 }} />
                    <Text style={{ marginHorizontal: 10 }}> {gender}</Text>
                </View>

                <View style={styles.BoxIfo}>
                    <GenderIcon name='supervisor-account' style={{ color: '#0DAE9F', fontSize: 25 }} />
                    <Text style={{ marginHorizontal: 10 }}> {`${country} / ${city}`}</Text>
                </View>

                <View style={{ marginTop: 2, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', with: '100%',paddingRight:30 ,paddingVertical:10}}>
                    <IconAntDesign  name ="edit" color={"#000000"} style={{fontSize:25}}/>
                    </View>

                    
                <View style={{ marginTop: 10, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', with: '100%' }}>
                    {/* <TouchableOpacity
                        style={{ fontSize: 10, height: 40, borderColor: '#707070', borderWidth: 1, justifyContent: 'center', marginVertical: 5, marginHorizontal: 5, width: 140, borderRadius: 8 }}>
                        <Button title={`Credit  ${balance}$`} color="#000000" />
                    </TouchableOpacity> */}

                    <View  
  style={{height:45,backgroundColor:'#000',justifyContent:'center',marginVertical:0 , paddingHorizontal:20,  marginEnd:20, borderRadius:10}}

  onPress={()=>{
    navigation.navigate('LoginScreen')
   }}>
 <Text   style={{backgroundColor:'#000', fontWeight:"bold", textAlign: 'center',textAlignVertical: "center", borderRadius:20, color:"#fff", height:"100%",  width:"100%", justifyContent:'center'}}
>{`Credit  ${balance}$`}</Text>

 </View>




                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert("Modal has been closed.");
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={{
                            flex: 1,
                            justifyContent: "flex-end",
                            alignItems: "center",
                            marginTop: 50,
                        }}>
                            <View style={{
                                // margin: 20,
                                width:'100%',
                                height:240,
                                borderColor:'#0000000F',
                                borderTopLeftRadius:40,
                                backgroundColor: "#FFFF",
                                borderRadius: 20,
                                paddingHorizontal: 30,
                                paddingTop:20,
                                shadowColor: "#0000000F",
                                shadowOffset: {
                                    width: 1,
                                    height: 2
                                }
                            }}>
                              
                                <TouchableOpacity  onPress={() => setModalVisible(!modalVisible)}
                                style={{marginBottom:25,justifyContent:'center',alignItems:'flex-end'}}> 
                                     <IconAntDesign name ="close" style={{fontSize:25}}/>
                                     </TouchableOpacity>
                              
                                <View style={{marginHorizontal:15,flexDirection:'row',height:50,width:'100%',marginBottom:15}}>
                               <Text style={{justifyContent:'center',fontSize:16,marginVertical:15,paddingHorizontal:10}}> Credit </Text>
                               <TextInput style={{paddingHorizontal:20,backgroundColor:'#0000000F',width:"70%",borderRadius:10}}/>
                                </View>



                                
                                <Pressable
                                    style={{
                                        width:160,
                                        marginLeft:120,
                                        height:40,
                                        borderRadius: 10,
                                        padding: 10,
                                        elevation: 0, backgroundColor: "#0DAE9F"
                                    }}
                                    onPress={() => {
                                        setModalVisible(!modalVisible)
                                        
                                    
                                    }
                                    }
                                >
                                    <Text style={{
                                        color: "white",
                                        fontSize:17,
                                        textAlign: "center"
                                    }}> Add </Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={{ fontSize: 10, height: 40, borderColor: '#0DAE9F', borderWidth: 1, justifyContent: 'center', marginVertical: 5, width: 110, borderRadius: 8, backgroundColor: '#0DAE9F' }}
                        onPress={() => setModalVisible(true)}
                    >
                        <Text style={{ color: '#FFFF', fontSize: 18, paddingHorizontal: 5,marginLeft:5 }}>Add Credit</Text>
                    </Pressable>




                </View>
            </View>



        </SafeAreaView>
    )
}
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
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#00000029',
        borderColor: '#4E4E4E',
        borderRadius: 5,
        marginVertical: 10,
        paddingHorizontal: 15,
        fontSize: 15,
    }
})
export default SonInfo;