import React, {useEffect} from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useState} from 'react';
import {login} from '@react-native-seoul/kakao-login';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useRoute} from '@react-navigation/native';

export const SigninSectionScreen = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<any>;
}) => {
  const [result, setResult] = useState<string>('');
  const route = useRoute();

  const webviewRef = route.params;
  useEffect(() => {
    if (route.params?.webviewRef) {
      Alert.alert(route.params?.webviewRef);
      setResult(route.params?.webviewRef);
    }
  }, [route.params]);
  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <ScrollView>
          <Text>{result}</Text>
          <View style={{height: 100}} />
        </ScrollView>
      </View>
      <Pressable
        style={styles.button}
        onPress={async () => {
          try {
            const result = await login();
            setResult(JSON.stringify(result));
            webviewRef.current.postMessage(
              JSON.stringify({
                action: 'LOGIN_SUCCESS',
                token: result.accessToken,
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
