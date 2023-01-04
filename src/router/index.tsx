import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@/screen/Login';
import Onboarding from '@/screen/Onboarding';
import {RooStackParamList} from './types';

const Stack = createNativeStackNavigator<RooStackParamList>();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default Router;
