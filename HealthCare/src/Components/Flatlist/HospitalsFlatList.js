import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HospitalsFlatList = () => {
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api-saude-bj-production.up.railway.app/api/hospitals/');
                setHospitals(response.data);
            } catch (error) {
                console.error('Erro ao obter dados dos hospitais:', error);
            }
        };

        fetchData();
    }, []);

    const renderHospitalItem = ({ item }) => (
        <View style={styles.listItem}>
            <Image source={{ uri: item.img }} style={styles.image} />
            <Text style={styles.hospitalText}>{item.nameid}</Text>
        </View>
    );

    return (
        <>
            <View style={styles.title}>
                {/* <Text numberOfLines={3} style={styles.lineText}>_____</Text> */}
                <FontAwesome name="hospital-o" style={styles.icon} size={30} />
                <Text numberOfLines={3} style={styles.titleText}>Hospitais Disponíveis</Text>
                {/* <Text numberOfLines={3} style={styles.lineText}>_____</Text> */}
            </View>

            <View style={styles.container}>
                <FlatList
                    data={hospitals}
                    keyExtractor={(item) => item.nameid.toString()}
                    renderItem={renderHospitalItem}
                    horizontal
                    contentContainerStyle={styles.flatListContent}
                    style={styles.flatList}
                    showsHorizontalScrollIndicator={true}
                />
            </View>
        </>

    );
};

const styles = StyleSheet.create({

    container: {
        flex: 0.43,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        //backgroundColor: 'white',
        justifyContent: 'space-evenly'
    },

    title: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        //backgroundColor: 'white',
       // borderRadius: 30,
        //width: 250
        //gap: 5
    },

    icon: {
        marginTop: 15,
        marginLeft: 10,
        color: '#5F6A6A',
    },

    hospitalText: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        //width: 20,
        color: '#5F6A6A',
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 7,
        textShadowColor: '#B3B6B7',
        marginLeft: 20
    },

    listItem: {
        flexDirection: 'column',
        alignItems: 'center',
        margin: 10,
    },

    image: {
        width: 120,
        height: 120,
        borderRadius: 80,
        borderWidth: 3,
        borderColor: '#5271FF',
        marginLeft: 30
    },

    titleText: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: -20,
        marginLeft: 10,
        color: '#5F6A6A',
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 7,
        textShadowColor: '#B3B6B7',
    },

    lineText: {
        fontSize: 20,
        marginTop: 11,
        marginBottom: -20,
        //marginLeft: 10,
        color: '#5F6A6A',
        fontWeight: 'bold',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        textShadowColor: 'black',
    },

    flatList: {
        width: '100%',
        height: 200,
        marginLeft: -15
        // borderBottomWidth: 2,
        // borderTopWidth: 2,
    },
});

export default HospitalsFlatList;