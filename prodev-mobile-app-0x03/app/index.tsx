// app/index.tsx
import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import styles from "../styles";

// Images
const googleImg = require("../assets/images/google.png");
const facebookImg = require("../assets/images/facebook.png");

export default function LoginScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.largeText}>
          Enter your email and password to sign in.
        </Text>

        <View style={styles.formGroup}>
          <TextInput placeholder="Email" style={styles.inputField} />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.inputField}
          />
        </View>

        <TouchableOpacity style={styles.socialMediaButton}>
          <Image
            source={googleImg}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialMediaButton}>
          <Image
            source={facebookImg}
            style={{ width: 20, height: 20, marginRight: 10 }}
          />
          <Text>Continue with Facebook</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
