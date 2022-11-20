import React, {useEffect, useState} from 'react';
import {Alert, Button, SafeAreaView} from 'react-native';
import {Header} from './components/Header';

const App = () => {
  const [name, setName] = useState<string>('Fabricio');
  const [title, setTitle] = useState<string>('Olá');

  useEffect(() => {
    console.log('Aqui está');
    if (name === 'Fabricio') {
      return setTitle('Hello');
    } else {
      setTitle('Olá');
    }

    return () => Alert.alert('OOPS', 'Component unmounted!');
  }, [name, title]);

  const handlePressButton = () => {
    setName(old => {
      if (old === 'Fabricio') {
        return 'Pedro';
      }
      return 'Fabricio';
    });
  };

  return (
    <SafeAreaView>
      <Header title={title} name={name} />
      <Button title="Change name" onPress={handlePressButton} />
    </SafeAreaView>
  );
};

export default App;
