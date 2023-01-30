import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feed from '@/screen/Feed';
import Stories from '@/screen/Stories';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Feed"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Stories" component={Stories} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
