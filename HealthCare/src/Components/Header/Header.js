import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Modal, TextInput } from 'react-native'
import MenuButton from "../Menu/MenuButton";
import SearchBox from "../SearchBox/SearchBox";

const Header = () => {

    return (
        <>
            <View style={styles.container}>
                <MenuButton />
                <SearchBox />
            </View>
        </>

    )
}

export default Header

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#5271FF',
        flex: 0.17,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: 0.9
        //justifyContent: 'space-between'
    },

})