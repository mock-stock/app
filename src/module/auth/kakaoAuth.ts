import {
  login,
  logout,
  getProfile as getKakaoProfile,
  shippingAddresses as getKakaoShippingAddresses,
  unlink,
  KakaoOAuthToken,
  KakaoProfile,
  KakaoShippingAddresses,
} from '@react-native-seoul/kakao-login';

export const signInWithKakao = async (): Promise<
  KakaoOAuthToken | undefined
> => {
  try {
    const token = await login();
    console.log('login success ', token.accessToken);
    return token;
  } catch (err) {
    console.error('login err', err);
  }
};

export const signOutWithKakao = async (): Promise<string | undefined> => {
  try {
    const message = await logout();

    return message;
  } catch (err) {
    console.error('signOut error', err);
  }
};

export const getProfile = async (): Promise<KakaoProfile | undefined> => {
  try {
    const profile = await getKakaoProfile();

    return profile;
  } catch (err) {
    console.error('signOut error', err);
  }
};

export const getShippingAddresses = async (): Promise<
  KakaoShippingAddresses | undefined
> => {
  try {
    const shippingAddresses = await getKakaoShippingAddresses();

    return shippingAddresses;
  } catch (err) {
    console.error('signOut error', err);
  }
};

export const unlinkKakao = async (): Promise<string | undefined> => {
  try {
    const message = await unlink();
    return message;
  } catch (err) {
    console.error('signOut error', err);
  }
};
