import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const EspecialidadesFlatList = ({ data }) => {

    

    return (
        <>
            <View style={styles.title}>
                {/* <Text numberOfLines={3} style={styles.lineText}>_____</Text> */}
                <Fontisto name="doctor" style={styles.icon} size={30} />
                <Text numberOfLines={3} style={styles.titleText}>Especialidades Disponíveis</Text>
                {/* <Text numberOfLines={3} style={styles.lineText}>_____</Text> */}
            </View>

            <View style={styles.container}>

                <FlatList
                    style={styles.flatList}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={true}
                    renderItem={({ item }) => (

                        <View style={styles.itemContainer}>
                            <Image source={{ uri: item.url }} style={styles.image} />
                            <Text style={styles.imageName}>{item.name}</Text>
                        </View>
                    )}
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
        marginTop: 30,
        //backgroundColor: '#5271FF'
    },

    itemContainer: {
        alignItems: 'center',
        marginRight: 10,
    },

    image: {
        width: 120,
        height: 120,
        borderRadius: 80,
        borderWidth: 3,
        borderColor: '#5271FF',
        marginLeft: 30
    },

    imageName: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold',
        //width: 20,
        color: '#5F6A6A',
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 7,
        textShadowColor: '#B3B6B7',
        marginLeft: 30
    },

    title: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        //gap: 5
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

    flatList: {
        width: '100%',
        height: 200,
    },

    icon: {
        marginTop: 15,
        marginLeft: 10,
        color: '#5F6A6A',
    },
});

export default EspecialidadesFlatList;