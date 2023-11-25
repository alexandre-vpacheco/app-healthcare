import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Modal, TextInput } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBox = () => {

    return (
        <>
            <View style={styles.inputBox}>
                <TextInput
                    style={styles.input}
                    placeholder= "Pesquisar"
                />
            </View>
        </>

    )
}

export default SearchBox

const styles = StyleSheet.create({

    input:{
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        width: 290,
        height: 40,
        marginLeft: 20,
        borderRadius: 30,
        alignItems: 'center',
        borderColor: '#e8e8e8',
        borderWidth: 2,
        backgroundColor: '#ECF0F1',
        padding: 10
    },

    icons: {
        borderWidth: 2,
        color: '#839192',
        width: 40,
        height: 50,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: '#839192',
        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 0,
    },
})