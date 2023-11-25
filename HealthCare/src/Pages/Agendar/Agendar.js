import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../Context/UserContext';
import BottomTab from '../../Components/BottomTab/BottomTab';
import Header from '../../Components/Header/Header';
import EspecialidadesList from '../../Components/Listas/EspecialidadesList';

export default function Agendar() {

    const { user } = useUser();

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const data = [
        { id: '1', name: 'Cardiologia', url: 'https://raw.githubusercontent.com/RafaelVieiraCamara/app-ic-bj-front-healthcare/0ee1436e406c80dfa452acaf5d6a42c30cb839d4/HealthCare/assets/especialidades/cardio.png' },
        { id: '2', name: 'Ortopedia', url: 'https://raw.githubusercontent.com/RafaelVieiraCamara/app-ic-bj-front-healthcare/0ee1436e406c80dfa452acaf5d6a42c30cb839d4/HealthCare/assets/especialidades/orto.png' },
        { id: '3', name: 'Pediatria', url: 'https://raw.githubusercontent.com/RafaelVieiraCamara/app-ic-bj-front-healthcare/0ee1436e406c80dfa452acaf5d6a42c30cb839d4/HealthCare/assets/especialidades/pedi.png' },
        { id: '4', name: 'Neurologia', url: 'https://raw.githubusercontent.com/RafaelVieiraCamara/app-ic-bj-front-healthcare/0ee1436e406c80dfa452acaf5d6a42c30cb839d4/HealthCare/assets/especialidades/neuro.png' },
    ];

    return (
        <>
            <Header />
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.txt}>Escolha uma Especialidade</Text>
                </View>

                <View style={styles.body}>
                    <EspecialidadesList data={data} />
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
        borderColor: '#85929E'
    },

    container: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#ECF0F1',
        alignItems: 'center',
        justifyContent: 'center',
    },

    txt: {
        fontSize: 23,
        padding: 10,
        color: '#5F6A6A',
        alignItems: 'center',
        padding: 10,
        marginLeft: -25,
        height: 70,
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 7,
        textShadowColor: '#B3B6B7',
    },

    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

});