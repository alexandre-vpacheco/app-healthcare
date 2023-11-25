import React from "react";
import { StyleSheet, Text, TouchableOpacity} from 'react-native'



const EntrarButton = ({ onpress }) => {
    return (
        <TouchableOpacity style={styles.button}
           onPress={onpress} >
            <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

    )
}

export default EntrarButton

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