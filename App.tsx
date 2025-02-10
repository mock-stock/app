/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {WebviewScreen} from './src/webview/WebviewScreen';
import {SigninSectionScreen} from './src/signin/SigninSectionScreen';
// import {SafeAreaView} from 'react-native';
import Home from './src/signin/Home';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="WebviewScreen"
          component={WebviewScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={SigninSectionScreen}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
