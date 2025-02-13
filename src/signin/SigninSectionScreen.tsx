import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {login} from '@react-native-seoul/kakao-login';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
// import kakaoLoginImage from '../../assets/images/button_kakao_login.png';

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
      <View style={{width: 300, gap: 81}}>
        <View style={{gap: 10}}>
          <Text style={styles.loginText}>
            간편하게 <Text style={styles.loginTextColor}>로그인</Text>하고
            {'\n'}
            모든 기능을 이용해 보세요!
          </Text>
          <Text style={styles.loginSubText}>
            신규회원이라면 5억 포인트 즉시 지급!
          </Text>
        </View>
        <Image
          source={require('../../assets/images/login_banner.png')}
          style={styles.loginBanner}
        />
      </View>
      <Pressable
        style={styles.kakaoPressable}
        onPress={async () => {
          try {
            const result = await login();
            webviewRef.current.postMessage(
              JSON.stringify({
                action: 'KAKAO_LOGIN_SUCCESS',
                kakaoAccessToken: result.accessToken,
              }),
            );
            navigation.goBack();
          } catch (e) {
            console.error(e);
          }
        }}>
        <Image
          source={require('../../assets/images/button_kakao_login.png')}
          style={styles.kakaoImage}
        />
      </Pressable>

      {/* <Pressable
        style={styles.button}
        onPress={async () => {
          try {
            const result = await login();
            webviewRef.current.postMessage(
              JSON.stringify({
                action: 'KAKAO_LOGIN_SUCCESS',
                kakaoAccessToken: result.accessToken,
              }),
            );
            navigation.goBack();
          } catch (e) {
            console.error(e);
          }
        }}>
        <Text style={styles.text}>카카오 로그인</Text>
      </Pressable> */}
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
    // justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 87,
    paddingBottom: 100,
    paddingHorizontal: 24,
  },
  // resultContainer: {
  //   flexDirection: 'column',
  //   width: '100%',
  //   padding: 24,
  // },
  // button: {
  //   backgroundColor: '#FEE500',
  //   borderRadius: 40,
  //   borderWidth: 1,
  //   width: 250,
  //   height: 40,
  //   paddingHorizontal: 20,
  //   paddingVertical: 10,
  //   marginTop: 10,
  // },
  loginText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000000',
  },
  loginSubText: {
    fontSize: 14,
    color: '#545454',
  },
  loginTextColor: {
    color: '#477EEA',
  },
  loginBanner: {
    width: '100%',
    height: 93,
    // resizeMode: 'contain',
  },
  kakaoPressable: {
    width: '100%',
    height: 'auto',
    marginTop: 100,
  },
  kakaoImage: {
    width: '100%',
    height: 45,
    // resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
  },
});
