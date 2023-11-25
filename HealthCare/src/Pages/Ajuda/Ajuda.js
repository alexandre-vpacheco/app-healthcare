import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../Context/UserContext';
import BottomTab from '../../Components/BottomTab/BottomTab';
import Header from '../../Components/Header/Header';

export default function Ajuda() {

    const { user } = useUser();

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    return (
        <>
            <Header />
            <View style={styles.container}>

                <View style={styles.title}>
                    <Text style={styles.txt}>Como Funciona Nosso App</Text>
                </View>

                <View style={styles.body}>
                    <Text style={styles.bodyText}>Se não tiver nenhuma consulta agendada, 
                    você pode procurar por hospitais próximos à sua localização na aba "Hospitais Próximos" e, após selecionar o hospital, 
                    selecionar uma especialidade. Também é possível escolher a especialidade primeiro na aba "Agendar consulta". Após isso, 
                    se houver disponibilidade para o dia e horário selecionados, sua consulta será automaticamente agendada e aparecerá na aba "agenda".</Text>
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
        flex: 0.3,
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
        //justifyContent: 'center',
    },

    txt: {
        fontSize: 23,
        color: '#5F6A6A',
        alignItems: 'center',
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 7,
        textShadowColor: '#B3B6B7',
    },

    bodyText: {
        fontSize: 18,
        color: '#5F6A6A',
        alignItems: 'center',
        marginLeft: -5,
        marginTop: 20,
        //height: 70,
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 7,
        textShadowColor: '#B3B6B7',
        textAlign: 'justify',
    },

    body: {
        alignItems: 'center',
        marginTop: 20,
        padding: 16,
        backgroundColor: 'white',
        width: '85%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'grey'
    },

});