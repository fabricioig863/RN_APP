import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {propsNavigationStack} from '../types';

import Login from '@/screen/Login';
import Onboarding from '@/screen/Onboarding';

const Stack = createNativeStackNavigator<propsNavigationStack>();

export default function () {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
}
