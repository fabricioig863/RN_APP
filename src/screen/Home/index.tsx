import Button from '@/components/Button';
import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import * as S from './styles';

const Home = ({navigation, route}) => {
  const data = route.params;
  const [errorMessage, setErrorMessage] = useState('');

  console.log({data});

  const handleNavigateParams = () => {
    navigation.navigate('Onboarding', {
      profile: {
        name: 'Pedro henrique',
      },
    });
  };

  useEffect(() => {
    if (data === undefined) {
      setErrorMessage('Os dados nao foram carregados');
    } else {
      handleNavigateParams();
    }
  }, []);

  return (
    <S.Container>
      <S.Content>
        <Button onPress={handleNavigateParams}>Home</Button>
        {errorMessage != '' && (
          <Text>{`Home: ${data?.profile.selectedUser}`}</Text>
        )}
      </S.Content>
    </S.Container>
  );
};

export default Home;
