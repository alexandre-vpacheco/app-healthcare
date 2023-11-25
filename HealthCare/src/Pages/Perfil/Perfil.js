import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../Context/UserContext';
import BottomTab from '../../Components/BottomTab/BottomTab';
import Header from '../../Components/Header/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Perfil() {

    const { user } = useUser();

    const navigation = useNavigation();

    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.title}>
                    <AntDesign name="user" style={styles.icon} size={30} />
                    <Text style={styles.txt}>Suas Informações</Text>
                </View>

                <View style={styles.body}>
                    <Text style={styles.bodyText}>Nome: {user.nameid}</Text>
                    <Text style={styles.bodyText}>Username: {user.username}</Text>
                    <Text style={styles.bodyText}>E-mail: {user.emails} </Text>
                    {/* <Text style={styles.bodyText}>Idade: 20 anos</Text> */}
                </View>
            </View>
            <BottomTab />
        </>
    );
}

const styles = StyleSheet.create({

    header: {
        marginTop: 35,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },

    title: {
        width: '100%',
        flex: 0.15,
        backgroundColor: '#F2F3F4',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#85929E',
        flexDirection: 'row'
    },

    icon: {
        color: '#5F6A6A',
    },

    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#ECF0F1',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    txt: {
        fontSize: 23,
        padding: 10,
        color: '#5F6A6A',
        alignItems: 'center',
        padding: 10,
        marginLeft: 0,
        marginTop: 15,
        height: 70,
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 7,
        textShadowColor: '#B3B6B7',
    },

    body: {
        flex: 1,
        alignItems: 'left',
        marginTop: 100,
        gap: 20
        //justifyContent: 'center',
        //alignItems: 'center'
    },

    bodyText: {
        width: 340,
        height: 50,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        color: '#5F6A6A',
        borderColor: '#5F6A6A',
        borderWidth: 1,
        borderRadius: 12,
        fontSize: 17,
        padding: 10
    },

});