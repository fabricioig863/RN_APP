import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '@/components/Icon';

import Onboarding from '@/screen/Onboarding';
import Home from '@/screen/Home';
import Solutions from '@/screen/Solutions';
import Splash from '@/screen/Splash';

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
      <BottomTab.Screen
        name="solutions"
        component={Solutions}
        options={{
          tabBarIcon: () => <Icon icon="eyeClose" />,
        }}
      />
      <BottomTab.Screen
        name="splash"
        component={Splash}
        options={{
          tabBarIcon: () => <Icon icon="skull" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
