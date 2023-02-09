import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

declare global {
  export type HomeStackParamList = {
    feed: undefined;
    stories: {name: string}
  }


  export type HomeStackNavigatorProp = StackNavigationProp<HomeStackParamList, 'feed'>;

  // useRoute types
  export type StoriesHomeStackRouteProps = RouteProp<HomeStackParamList, 'stories'>;
}
