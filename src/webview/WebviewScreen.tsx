/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {WebView} from 'react-native-webview';

export const WebviewScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>;
}): React.JSX.Element => {
  const webviewRef = useRef<WebView>(null);
  const handleMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      console.log('Received message from WebView:', data);

      if (data.action === 'LOGIN') {
        navigation.navigate('Login', webviewRef); // 로그인 화면으로 이동
      } else if (data.action === 'LOGIN_SUCCESS') {
      }
    } catch (error) {
      console.error('Error parsing WebView message:', error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <WebView
        ref={webviewRef}
        style={styles.container}
        source={{uri: 'https://dev.mock-stock.shop'}}
        // source={{uri: 'http://172.30.1.62:5500/api-check.html'}}
        originWhitelist={['*']} // 모든 도메인 허용
        javaScriptEnabled={true} // JavaScript 실행 허용
        domStorageEnabled={true} // DOM Storage 허용
        startInLoadingState={true} // 로딩 상태 표시
        onMessage={handleMessage}
        onError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.error('WebView Error:', nativeEvent);
        }}
        onHttpError={syntheticEvent => {
          const {nativeEvent} = syntheticEvent;
          console.error('HTTP Error:', nativeEvent);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    // paddingTop: 30,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
