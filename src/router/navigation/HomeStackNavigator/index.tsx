import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feed from '@/screen/Feed';
import Stories from '@/screen/Stories';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="feed"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="feed" component={Feed} />
      <Stack.Screen name="stories" component={Stories} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
