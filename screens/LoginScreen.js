import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import * as AppAuth from "expo-app-auth";

const LoginScreen = () => {
  const authenticate = async () => {
    const config = {
      issuer: "https://accounts.spotify.com",
      clientId: "a2d11a864d404aaaac1b76f6c5aa1b0d",
      scopes: [
        "user-read-email",
        "user-library-read",
        "user-read-recently-played",
        "user-top-read",
        "playlist-read-private",
        "playlist-read-collaborative",
        "playlist-modify-public",
      ],
      redirectUrl: "exp://192.168.1.10:19000/--/spotify-auth-callback",
    };
    const result = await AppAuth.authAsync(config);
    console.log(result);
  };
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ height: 80 }} />
        <Entypo
          name="spotify"
          size={80}
          color="white"
          style={{ textAlign: "center" }}
        />
        <Text
          style={{
            color: "white",
            fontSize: 50,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 40,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          Millions of songs free on spotify
        </Text>
        <View style={{ height: 80 }} />
        <Pressable
          onPress={authenticate}
          style={{
            backgroundColor: "#1DB954",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Sign in with Spotify</Text>
        </Pressable>

        <Pressable
          style={{
            backgroundColor: "#131624",
            padding: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: 300,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginVertical: 10,
            borderColor: "#c0c0c0",
            borderWidth: 0.8,
          }}
        >
          <MaterialIcons name="smartphone" size={24} color="white" />
          <Text
            style={{
              fontWeight: "500",
              color: "white",
              textAlign: "center",
              flex: 1,
            }}
          >
            Sign in with Phone
          </Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
