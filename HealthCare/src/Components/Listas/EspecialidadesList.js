import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

const EspecialidadesList = ({ data }) => {



    return (
        <>
            <View style={styles.container}>
                <FlatList
                    style={styles.flatList}
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    vertical
                    showsHorizontalScrollIndicator={true}
                    numColumns={2}
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
        marginTop: -50,

    },

    itemContainer: {
        marginTop: 40,
        alignItems: 'center',
        //justifyContent: 'center'
    },

    image: {
        width: 130,
        height: 130,
        borderRadius: 15,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 40,
        borderColor: 'grey',
        borderWidth: 2
    },

    imageName: {
        fontSize: 18,
        marginTop: 10,
        color: '#5F6A6A',
        fontWeight: 'bold',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 7,
        textShadowColor: '#B3B6B7',
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
        
    },

    icon: {
        marginTop: 15,
        marginLeft: 10,
        color: '#5F6A6A',
    },
});

export default EspecialidadesList;