import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from '@/screen/Onboarding';
import Post from '@/screen/Post';

const Stack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Perfil"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Perfil" component={Post} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
