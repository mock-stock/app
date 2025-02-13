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
import {Image, Pressable} from 'react-native';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  // const navigation = useNavigation(); // ✅ 네비게이션 객체 가져오기
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WebviewScreen">
        <Stack.Screen name="Test" component={Home} />
        <Stack.Screen
          name="WebviewScreen"
          component={WebviewScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          options={({navigation}) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#F2F4F6', // ✅ 헤더 배경색 변경
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <Pressable
                onPress={() => navigation.goBack()}
                style={{width: 'auto', height: 'auto'}}>
                <Image
                  source={require('./assets/images/button_back.png')}
                  style={{
                    width: 45,
                    height: 45,
                  }}
                />
              </Pressable>
            ),
          })}
          component={SigninSectionScreen}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
