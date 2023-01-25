import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {propsNavigationStack} from './types';
import Profile from '@/screen/Profile';
import Onboarding from '@/screen/Onboarding';

const Stack = createStackNavigator<propsNavigationStack>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
