import React from 'react';
import Button from '@/components/Button';
import * as S from './styles';
import {Text} from 'react-native';
import Separator from '@/components/Separator';

const Onboarding = ({navigation, route}) => {
  const {profile} = route.params;

  const handleNavigation = () => {
    return navigation.goBack();
  };

  const handleUpdate = () => {
    return navigation.setParams({
      profile: {
        name: 'Luiza Santini',
      },
    });
  };

  const handleParamsNavigateGoback = () => {
    return navigation.navigate('Home', {
      profile: {
        selectedUser: 'Pedro Henrique',
      },
    });
  };
  return (
    <S.Container>
      <S.Content>
        <Button onPress={handleNavigation}>Onboarding</Button>
        <S.ContentText>
          <Text>{profile.name}</Text>
        </S.ContentText>
        <Button onPress={handleUpdate}>Update state</Button>
        <Separator height={20} />
        <Button onPress={handleParamsNavigateGoback}>Voltando</Button>
      </S.Content>
    </S.Container>
  );
};

export default Onboarding;
