/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {WebView} from 'react-native-webview';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <WebView
        style={styles.container}
        source={{uri: 'https://dev.mock-stock.shop'}}
        originWhitelist={['*']} // 모든 도메인 허용
        javaScriptEnabled={true} // JavaScript 실행 허용
        domStorageEnabled={true} // DOM Storage 허용
        startInLoadingState={true} // 로딩 상태 표시
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
}

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

export default App;
