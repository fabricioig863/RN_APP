import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {propsNavigationStack} from './types';

import Home from '@/screen/Home';
import Onboarding from '@/screen/Onboarding';

const Stack = createStackNavigator<propsNavigationStack>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
