import React from 'react';
import { SafeAreaView, Text, Button, Image, StyleSheet, View, TouchableOpacity } from 'react-native';

const DBox = (props) => {


    (
        <View style={{ marginVertical: 5, justifyContent: 'center', backgroundColor: '#FFF', height: 75, width: "100%" }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View
                    style={{
                        paddingLeft: 15,
                        justifyContent: 'center',
                        width: '75%',
                        backgroundColor: '#FFFF',
                        height: 75,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10,
                        shadowColor: '#0000000F',
                        shadowOffset:
                        {
                            width: 0,
                            height: 3
                        }, shadowRadius: 5, shadowOpacity: 1.0
                    }}>
                    <Text style={{ color: '#3AD27D', fontSize: 18 }}>
                        Piece of land
                    </Text>



                </View>

                <View style={{
                    paddingLeft: 15,
                    justifyContent: 'center',
                    width: '25%', backgroundColor: '#3AD27D', height: 75,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    shadowColor: '#0000000F',
                    shadowOffset:
                    {
                        width: 0,
                        height: 3
                    }, shadowRadius: 5, shadowOpacity: 1.0
                }}>
                    <Text style={{ color: '#FFFF', fontSize: 18 }}>
                        60%
                    </Text>
                </View>

            </View>


        </View>
    )
}
export default DBox;