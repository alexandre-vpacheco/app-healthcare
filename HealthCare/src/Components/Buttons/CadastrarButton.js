import React from "react";
import { StyleSheet, Text, TouchableOpacity} from 'react-native'



const CadastrarButton = ({ onpress }) => {
    return (
        <TouchableOpacity style={styles.button}
           onPress={onpress} >
            <Text>Ainda não possui uma conta? <Text style={styles.cadastreTxt}>Cadastre-se.</Text></Text>
        </TouchableOpacity>

    )
}

export default CadastrarButton

const styles = StyleSheet.create({

    button: {
        //marginTop: -35,
        backgroundColor: '#ECF0F1',
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.8
    },

    buttonText: {
        fontSize: 17
    },

    cadastreTxt: {
        color: '#3b71f3'
    }
})