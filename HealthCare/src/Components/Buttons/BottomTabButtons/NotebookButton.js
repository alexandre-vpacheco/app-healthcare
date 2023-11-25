import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Loading from '../../Loading/Loading';
import { useState } from 'react';

const NotebookButton = () => {
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const handlePress = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
      navigation.navigate('Agenda');
    }, 500)
  };

  return (
    <>
    <Loading visible={visible}/>
      <TouchableOpacity onPress={handlePress}>
        <SimpleLineIcons name="notebook" size={30} color="white" font-weight="bold" />
      </TouchableOpacity>
    </>

  );
};

export default NotebookButton;