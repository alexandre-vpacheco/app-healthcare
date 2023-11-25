import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const HospitalsList = () => {
  const [hospitais, setHospitais] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-saude-bj-production.up.railway.app/api/hospitals/');
        setHospitais(response.data);
      } catch (error) {
        console.error('Erro ao obter os dados dos hospitais:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.img }} style={styles.image} />
      <Text style={styles.hospitalName}>{item.nameid}</Text>
    </View>
  );

  return (
    <FlatList
      data={hospitais}
      renderItem={renderItem}
      keyExtractor={(item) => item.nameid.toString()}
    />
  );
};

const styles = StyleSheet.create({

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '80%'
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 25,
    marginRight: 10,
  },
  hospitalName: {
    fontSize: 17,
    color: '#5F6A6A',
    fontWeight: 'bold',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 7,
    textShadowColor: '#B3B6B7',
  },
});

export default HospitalsList;