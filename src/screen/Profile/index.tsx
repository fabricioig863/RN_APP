import React from 'react';
import Button from '@/components/Button';
import * as S from './styles';

const Profile = ({navigation}) => {
  const handleNavigate = () => {
    navigation.navigate('Onboarding');
  };
  return (
    <S.Container>
      <S.Content>
        <Button onPress={handleNavigate}>on click me</Button>
      </S.Content>
    </S.Container>
  );
};

export default Profile;
