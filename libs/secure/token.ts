import * as SecureStore from "expo-secure-store";

export const saveAccessToken = (token: string) => SecureStore.setItemAsync("access_token", token);

export const getAccessToken = () => SecureStore.getItemAsync("access_token");
