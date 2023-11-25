import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, Alert, SafeAreaView, Text } from 'react-native';
import EntrarButton from '../../Components/Buttons/EntrarButton';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../Components/Loading/Loading';
import { useUser } from '../../Context/UserContext';
import CadastrarButton from '../../Components/Buttons/CadastrarButton';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Login() {

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    const { login } = useUser();

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const entrar = () => {
        if (username == '' || password == '') {
            setVisible(true);
            setTimeout(() => {
                setVisible(false);
            }, 500)
            Alert.alert('Aviso', 'Os campos não podem estar vazios!')
        } else {
            setVisible(true);
            login(username, password);
            setTimeout(() => {
                setVisible(false);
            }, 1500)
        }
    }

    const cadastro = () => {
        console.log('Cadastro clicado')
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('Cadastro')
            console.log('Entramos na tela de cadastro')
        }, 500)
    }

    return (
        <>
            <Loading visible={visible} />
            <View style={styles.container}>
                <View style={styles.header}>
                <Icon name="heartbeat" style={styles.heartIcon} size={30} />
                <Text style={styles.txt}> HealthCare</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.inputBox}>
                        <Icon name="user" style={styles.icons} size={30} />
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            //onChangeText={(text) => setUsername(text)}
                            onChangeText={setUsername}
                            value={username}
                        />
                    </View>
                    <View style={styles.inputBox}>
                        <Icon name="lock" style={styles.icons} size={30} />
                        <TextInput
                            style={styles.input}
                            placeholder="Senha"
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry
                        />
                    </View>
                    <EntrarButton onpress={entrar} />
                    <CadastrarButton onpress={cadastro} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F6F8FA',
        alignItems: 'center',
        //justifyContent: 'center',
    },

    txt: {
        fontSize: 32,
        color: '#839192',
        marginTop: 203,
        alignItems: 'center',
        padding: 10,
        marginLeft: -25,
        height: 70,
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 7,
        textShadowColor: '#B3B6B7',
    },

    heartIcon: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#5271FF',
        marginTop: 220,
        alignItems: 'center',
        marginRight: 15
    },

    header: {
        flexDirection: 'row'
    },

    inputBox: {
        flexDirection: 'row',
        width: 300,
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

    body: {
        marginTop: 40,
        marginBottom: 10,
        height: 350,
        width: 340,
        gap: 15,
        height: 340,
        backgroundColor: '#ECF0F1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        padding: 10
    },

    input: {
        width: 260,
        height: 50,
        //margin: 9,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: '#839192',
        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 2,
    },

});