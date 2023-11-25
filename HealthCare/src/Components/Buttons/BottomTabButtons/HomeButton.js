import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Loading from '../../Loading/Loading';
import { useState } from 'react';

const HomeButton = () => {

  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const handlePress = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      navigation.navigate('Home');
    }, 500)
  };

  return (
    <>
      <Loading visible={visible} />
      <TouchableOpacity onPress={handlePress}>
        <FontAwesome name="home" size={34} color="white" font-weight="bold" />
      </TouchableOpacity>
    </>

  );
};

export default HomeButton;