import React, {useState} from 'react';
import {Button, SafeAreaView} from 'react-native';
import {Header} from './components/Header';

const App = () => {
  const [name, setName] = useState<string>('Fabricio');
  const [title] = useState<string>('Olá');

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
