import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import RestuarantScreen from './screens/RestuarantScreen';

const navigator = createStackNavigator({
  Home: HomeScreen,
  Restuarant: RestuarantScreen,
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Search Restuarants'
  }
});

export default createAppContainer(navigator);