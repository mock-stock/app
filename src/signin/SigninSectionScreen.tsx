import React from 'react';
import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {login} from '@react-native-seoul/kakao-login';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

export const SigninSectionScreen = ({
  navigation,
  route,
}: {
  navigation: NativeStackNavigationProp<any>;
  route: RouteProp<any>;
}) => {
  // const route = useRoute();
  const webviewRef = route.params?.webviewRef;
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <ScrollView>
          <View style={{height: 100}} />
        </ScrollView>
      </View>
      <Pressable
        style={styles.button}
        onPress={async () => {
          try {
            const result = await login();
            webviewRef.current.postMessage(
              JSON.stringify({
                action: 'LOGIN_SUCCESS',
                tokenInfo: result,
              }),
            );
            navigation.goBack();
          } catch (e) {
            console.error(e);
          }
        }}>
        <Text style={styles.text}>카카오 로그인</Text>
      </Pressable>
      {/* <Pressable
        style={styles.button}
        onPress={async () => {
          setResult(JSON.stringify(await getProfile()));
        }}>
        <Text style={styles.text}>프로필 조회</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => getShippingAddresses()}>
        <Text style={styles.text}>배송주소록 조회</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => unlinkKakao()}>
        <Text style={styles.text}>링크 해제</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => signOutWithKakao()}>
        <Text style={styles.text}>카카오 로그아웃</Text>
      </Pressable> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 100,
  },
  resultContainer: {
    flexDirection: 'column',
    width: '100%',
    padding: 24,
  },
  button: {
    backgroundColor: '#FEE500',
    borderRadius: 40,
    borderWidth: 1,
    width: 250,
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
  },
});
