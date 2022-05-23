
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TouchableWithoutFeedback,Dimensions } from "react-native";
const BottomPopup =()=>{
const [show,setshow]=useState(false)

const showw=()=>{
    setshow(true);
}

const close =()=>{
    setshow(false)
}
    return (
        <Modal
        animationType={'fade'}
        transparent={true}
        visible={show}
        onRequestClose={close}
        >
<View style={{flex:1,backgroundColor:'#00000AA',justifyContent:'flex-end'}}>

</View>
        </Modal>
    )
}
export default BottomPopup