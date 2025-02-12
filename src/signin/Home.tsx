import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StatusBar, Text, View} from 'react-native';

function Home({navigation}: {navigation: NativeStackNavigationProp<any>}) {
  return (
    <View>
      {/* <Button
        title="실제 웹뷰로"
        // 다른 페이지로 이동
        onPress={() => navigation.navigate('WebviewScreen', 'test')}
      /> */}
      <Button
        title="테스트 화면으로"
        // 다른 페이지로 이동
        onPress={() => navigation.replace('WebviewScreen')}
      />
      <StatusBar style="auto" />
    </View>
  );
}
export default Home;
