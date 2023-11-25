import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
//import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import HomeButton from "../Buttons/BottomTabButtons/HomeButton";
import BackButton from "../Buttons/BottomTabButtons/BackButton";
import NotebookButton from "../Buttons/BottomTabButtons/NotebookButton";



const BottomTab = () => {
    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <NotebookButton />
                <HomeButton />
                <BackButton />
            </View>
        </View>

    )
}

export default BottomTab

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#5271FF',
        flex: 0.12,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        opacity: 0.9
    },

    buttons: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

})