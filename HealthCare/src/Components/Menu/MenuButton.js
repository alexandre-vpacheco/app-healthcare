import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Loading from "../Loading/Loading";

const MenuButton = () => {

    const [modalVisible, setModalVisible] = useState(false);

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }


    const handlePerfil = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            setModalVisible(false);
            navigation.navigate('Perfil');
        }, 800)
    }

    const handleHospitais = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            setModalVisible(false);
            navigation.navigate('Hospitais');
        }, 800)
    }

    const handleAgendar = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            setModalVisible(false);
            navigation.navigate('Agendar');
        }, 800)
    }

    const handleContatos = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            setModalVisible(false);
            navigation.navigate('Contatos');
        }, 800)
    }

    const handleAjuda = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            setModalVisible(false);
            navigation.navigate('Ajuda');
        }, 800)
    }

    const handleSair = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            setModalVisible(false);
            navigation.navigate('Login');
        }, 800)
    }

    return (
        <>

            <TouchableOpacity onPress={toggleModal}>
                <Icon name="menu" style={styles.icon1} size={35} />
            </TouchableOpacity>

            <Modal
                transparent={true}
                animationType="fade"
                slideFrom="left"
                visible={modalVisible}
                onRequestClose={toggleModal}
            >
                <Loading visible={visible} />
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>

                        <View style={styles.modalTitle}>
                            <TouchableOpacity onPressIn={toggleModal}>
                                <Icon name="menu" style={styles.icon2} size={35} />
                            </TouchableOpacity>
                            <Text style={styles.modalTitleText}>Opções</Text>
                        </View>

                        <View style={styles.modalBody}>
                            <TouchableOpacity onPressIn={handlePerfil} style={styles.options}>
                                <AntDesign name="user" style={styles.icons} size={30} />
                                <Text style={styles.optionsText}>Meu Perfil</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPressIn={handleHospitais} style={styles.options}>
                                <FontAwesome name="hospital-o" style={styles.icons} size={30} />
                                <Text style={styles.optionsText}>Hospitais Próximos</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPressIn={handleAgendar} style={styles.options}>
                                <SimpleLineIcons name="notebook" style={styles.icons} size={30} />
                                <Text style={styles.optionsText}>Agendar Consulta</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.options}>
                                <Fontisto name="doctor" style={styles.icons} size={30} />
                                <Text style={styles.optionsText}>Consulta Online</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.options}>
                                <FontAwesome5 name="donate" style={styles.icons} size={30} />
                                <Text style={styles.optionsText}>Doações</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.options}>
                                <MaterialIcons name="lightbulb" style={styles.icons} size={30} />
                                <Text style={styles.optionsText}>Dicas de Saúde</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPressIn={handleContatos} style={styles.options}>
                                <MaterialIcons name="phone-enabled" style={styles.icons} size={30} />
                                <Text style={styles.optionsText}>Contatos</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPressIn={handleAjuda} style={styles.options}>
                                <Entypo name="help" style={styles.icons} size={30} />
                                <Text style={styles.optionsText}>Ajuda</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPressIn={handleSair} style={styles.options}>
                                <MaterialCommunityIcons name="logout" style={styles.icons} size={30} />
                                <Text style={styles.optionsText}>Sair</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

        </>

    )
}

export default MenuButton

const styles = StyleSheet.create({

    icon1: {
        //backgroundColor: '#5271FF',
        marginLeft: 20,
        color: 'white'
    },

    icon2: {
        //backgroundColor: '#5271FF',
        color: 'white'
    },

    modalTitle: {
        flexDirection: 'row',
        marginTop: 20
    },

    modalTitleText: {
        color: 'white',
        marginLeft: 15,
        fontSize: 21,
    },

    modalBody: {
        flexDirection: 'column',
        gap: 15,
        marginTop: 30
    },

    options: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        width: '90%',
        borderRadius: 30,
        alignItems: 'center',
        borderColor: '#e8e8e8',
        borderWidth: 2,
        backgroundColor: '#ECF0F1'
    },

    optionsText: {
        fontSize: 15,
        marginLeft: 10,
        color: '#5F6A6A',
        fontWeight: 'bold'
    },

    icons: {
        borderWidth: 2,
        color: '#839192',
        width: 50,
        height: 50,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: '#839192',
        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 30,
    },

    modalContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalContent: {
        backgroundColor: '#5271FF',
        width: '75%',
        height: '100%',
        paddingLeft: 20,
        elevation: 5,
        gap: 10,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },

})