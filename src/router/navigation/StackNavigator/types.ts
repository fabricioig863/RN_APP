import { StackNavigationProp } from '@react-navigation/stack';

export type propsNavigationStack = {
  Home: {
    profile: {
      name: string;
    }
  };
  Onboarding: undefined;
}

export type propsStack = StackNavigationProp<propsNavigationStack>;
