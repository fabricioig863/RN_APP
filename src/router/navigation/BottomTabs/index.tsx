import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '@/components/Icon';
import HomeStackNavigator from '../HomeStackNavigator';
import ProfileStackNavigator from '../ProfileStackNavigator';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => <Icon icon="hacker" />,
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: () => <Icon icon="money" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
