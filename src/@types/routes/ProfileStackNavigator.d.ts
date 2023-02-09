import { Route } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

declare global {
  export type ProfileStackParamList = {
    perfil: undefined;
    onboarding: undefined;
  }

  export type ProfileStackNavigationProp = StackNavigationProp<ProfileStackParamList, 'perfil'>;
}
