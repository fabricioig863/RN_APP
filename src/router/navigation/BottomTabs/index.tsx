import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '@/components/Icon';

import Onboarding from '@/screen/Onboarding';
import Home from '@/screen/Home';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon icon="hacker" />,
        }}
      />
      <BottomTab.Screen
        name="onboarding"
        component={Onboarding}
        options={{
          tabBarIcon: () => <Icon icon="money" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
