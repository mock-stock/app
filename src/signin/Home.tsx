import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StatusBar, Text, View} from 'react-native';

function Home({navigation}: {navigation: NativeStackNavigationProp<any>}) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Profile"
        // 다른 페이지로 이동
        onPress={() => navigation.navigate('WebviewScreen')}
      />
      <StatusBar style="auto" />
    </View>
  );
}
export default Home;
