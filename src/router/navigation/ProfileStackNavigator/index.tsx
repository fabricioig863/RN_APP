import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '@/screen/Onboarding';
import Post from '@/screen/Post';

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="perfil"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="perfil" component={Post} />
      <Stack.Screen name="onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
