import React from 'react';
import BottomTabNavigator from './navigation/SignedInNavigator/BottomTabNavigator';
import SignInNavigator from './navigation/SignInNavigator';

const Routes = () => {
  const isLoggedIn = false;

  return isLoggedIn ? <BottomTabNavigator /> : <SignInNavigator />;
};

export default Routes;
