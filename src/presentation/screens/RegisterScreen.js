import React from 'react';
import { TextInput, SafeAreaView, Text, Button, Image, StyleSheet, View, TouchableOpacity } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ height: '100%', width: '100%', backgroundColor: '#0DAE9F' }}>


            <View style={{ backgroundColor: '#0DAE9F', height: '27%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'black', height: 150, width: 150, borderRadius: 120, marginTop: 25 }}>
                </View>
            </View>

            <View style={{ flexDirection: 'column', width: '100%', paddingHorizontal: 25, height: '100%', backgroundColor: 'white', paddingTop: 10 }}>
                <TextInput style={styles.TextFieldStyle} placeholder=" Enter your user name" />
                <TextInput style={styles.TextFieldStyle} placeholder=" Enter your E-mail" />
                <TextInput style={styles.TextFieldStyle} placeholder=" Enter your password" />
                <TextInput style={styles.TextFieldStyle} placeholder=" Confirm password " />
                <TextInput style={styles.TextFieldStyle} placeholder=" Gender " />
                <View style={{
                    flexDirection: 'row', backgroundColor: 'white', borderRadius: 5,
                    marginVertical: 5, justifyContent: 'center'
                }}>
                    <TextInput style={{ marginHorizontal: 10, width: 160, ...styles.TextFieldStyle }} placeholder=" Gender " />
                    <TextInput style={{ marginHorizontal: 10, width: 160, ...styles.TextFieldStyle }} placeholder=" Gender " />


                </View>
                <TouchableOpacity
                    style={{ height: 55, backgroundColor: '#0DAE9F', justifyContent: 'center', marginVertical: 5, width: 230, marginLeft: 55, borderRadius: 8 }}>
                    <Button
                        onPress={() => { navigation.navigate('HomeScreen') }}
                        title='Register' color="white" />
                </TouchableOpacity>

            </View>
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

    }
})


export default RegisterScreen;