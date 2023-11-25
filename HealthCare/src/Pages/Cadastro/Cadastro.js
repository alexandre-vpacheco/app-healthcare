import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Alert, TextInput, Button } from 'react-native';
import CadastrarButton from '../../Components/Buttons/CadastrarButton';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../Components/Loading/Loading';
import VoltarParaLogin from '../../Components/Buttons/VoltarParaLogin';
import fetch from 'node-fetch';
import ConfirmarCadastroButton from '../../Components/Buttons/ConfirmarCadastoButton';

export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [confirmarEmail, setConfirmarEmail] = useState('');
    const [password, setPassword] = useState('');

    const [visible, setVisible] = useState(false);

    const navigation = useNavigation();

    const handleCadastro = async () => {

        if (nome === '' || username === '' || email === '' || password === '') {
            Alert.alert('Aviso', 'Todos os campos devem estar preenchidos!');
            return;
        }

        if (email !== confirmarEmail) {
            Alert.alert('Os e-mails preenchidos devem ser iguais!');
            return;
        }

        const url = "https://api-saude-bj-production.up.railway.app/api/auth/register";
        //const url = "localhost:5000/api/auth/register";

        const dadosUsuario = {
            nameid: nome,
            username: username,
            emails: email,
            password: password,
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dadosUsuario),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                Alert.alert('Erro na requisição:', errorMessage);
            } else {
                const data = await response.json();
                setTimeout(() => {
                    Alert.alert('Cadastro realizado!');
                }, 500);
                setVisible(true);
                setTimeout(() => {
                    setVisible(false);
                    navigation.navigate('Login');
                }, 500);

            }
        } catch (error) {
            console.log('Erro na requisição de cadastro:', error);
            Alert.alert('Erro na requisição de cadastro:', error.message);
        }
    };

    const handleVoltar = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false);
            navigation.navigate('Login')
        }, 500)
    }

    return (
        <>
            <Loading visible={visible} />
            <View style={styles.container}>
                <View style={styles.body}>
                    <Text style={styles.txt}>Página de Cadastro</Text>
                    <TextInput
                        placeholder='Nome'
                        style={styles.input}
                        onChangeText={setNome}
                    />

                    <TextInput
                        placeholder='Username'
                        style={styles.input}
                        onChangeText={setUsername}
                    />

                    <TextInput
                        placeholder='E-mail'
                        style={styles.input}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />

                    <TextInput
                        placeholder='Confirmar E-mail'
                        style={styles.input}
                        onChangeText={setConfirmarEmail}
                        keyboardType="email-address"
                    />

                    <TextInput
                        placeholder='Senha'
                        style={styles.input}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <ConfirmarCadastroButton onpress={handleCadastro} />
                    <VoltarParaLogin onpress={handleVoltar} />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#F6F8FA',
        padding: 20,
    },

    txt: {
        fontSize: 25,
        color: '#839192',
        alignItems: 'center',
        padding: 10,
        marginLeft: -15,
        height: 70,
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 7,
        textShadowColor: '#B3B6B7',
    },

    plusTxt: {
        fontWeight: 'bold',
        fontSize: 35,
        color: '#11A99A',
        alignItems: 'center',

    },

    body: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        backgroundColor: '#ECF0F1',
        borderRadius: 15,
        padding: 10,
        height: 600    
    },

    input: {
        width: 300,
        height: 50,
        //margin: 9,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        color: '#839192',
        borderColor: '#e8e8e8',
        borderWidth: 2,
        borderRadius: 5,
    },

    buttonsBox: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20
    },
});