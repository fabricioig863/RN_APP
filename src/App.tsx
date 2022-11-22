import React, {useEffect, useState, useCallback, useMemo, useRef} from 'react';
import {Button, SafeAreaView, TextInput} from 'react-native';
import {Header} from './components/Header';
import {TextInputStyles} from './styles.global';

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
  }, [name, title]);

  console.log(`state: ${name}`);

  // Com o useCallback teremos uma funçao que não irá ser atualizada sempre que atualizemos o estado.
  // Será fixo, ele mantém uma funçao na memória para voce, evitando novas renderizações.

  const handlePressButton = useCallback(() => {
    if (name === 'Fabricio') {
      console.log(`handlePress: ${name}`);
      setName('Pedro');
    } else {
      setName('Ignácio');
    }
  }, [name]);

  // useMemo = Retorna um valor memoizado.
  const nameChange = useMemo(() => {
    // return value
    return `${name} | ${new Date()}`;
  }, [name]);

  //Refs = useRefs Ele é usado para oferecer uma referencia há um component diretamente.

  const inputRef = useRef<TextInput>({} as TextInput);

  return (
    <SafeAreaView>
      <Header title={title} name={nameChange} />
      <Button title="Change name" onPress={() => inputRef.current.blur()} />
      <TextInputStyles ref={inputRef} onChangeText={text => setName(text)} />
    </SafeAreaView>
  );
};

export default App;
