import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Loading from '../../Loading/Loading';
import { useState } from 'react';

const BackButton = () => {

  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const handlePress = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      navigation.goBack();
    }, 500)
  };

  return (
    <>
      <Loading visible={visible}/>
      <TouchableOpacity onPress={handlePress}>
        <AntDesign name="back" size={31} color="white" font-weight="bold" />
      </TouchableOpacity>
    </>

  );
};

export default BackButton;