import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '@/screen/Login';
import Onboarding from '@/screen/Onboarding';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="onboarding" component={Onboarding} />
    </Stack.Navigator>
  );
};

export default Router;
