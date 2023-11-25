import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



const VoltarParaLogin= ({ onpress }) => {
    return (
        <TouchableOpacity style={styles.button}
           onPress={onpress} >
            <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>

    )
}

export default VoltarParaLogin

const styles = StyleSheet.create({

    button: {
        //marginTop: -25,
        backgroundColor: '#5271FF',
        borderRadius: 5,
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8
    },

    buttonText: {
        fontSize: 17
    }
})