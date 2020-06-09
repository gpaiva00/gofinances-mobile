import React, { FC, useCallback, useState } from "react"
import {
  View,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
  ImageBackground,
  Text,
} from "react-native"
import * as Google from "expo-google-app-auth"

import { useAuth, User } from "../../hooks/Auth"

import { FontAwesome } from "@expo/vector-icons"
import styles from "./styles"
import signInBackground from "../../assets/signInBackground.jpg";

const SignIn: FC = () => {
  const [loading, setIsLoading] = useState(false)
  const { signUp } = useAuth()

  const handleSignIn = useCallback(async () => {
    setIsLoading(true)

    const { type, user } = await Google.logInAsync({
      androidStandaloneAppClientId: "771235129605-1lgfdmuc4u4dc6odd2508s8bsorc86lo.apps.googleusercontent.com",
      // androidClientId: '771235129605-m1qh2ogpfl28qfqiq25p5ucoddb3rb9c.apps.googleusercontent.com',
      scopes: ["email", "profile"],
    })

    if (type === "success") {
      const { name, email, photoUrl } = user

      await signUp({
        name,
        email,
        avatar: photoUrl,
      })
    } else if (type === "cancel") {
      ToastAndroid.show("Login cancelado pelo usuário", ToastAndroid.SHORT)
    }

    setIsLoading(false)
  }, []);

  if (loading)
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}>
        <ActivityIndicator size={30} color="#fff" />
      </View>
    )

  return (
    <ImageBackground source={signInBackground} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.greetingsContent}>
          <Text style={styles.greetingsTitle}>Seja bem-vindo ao</Text>
          <Text style={[styles.appName, { fontWeight: "bold" }]}>
            Go
            <Text style={{ fontWeight: "normal" }}>Finances</Text>
          </Text>
        </View>

        <Text style={[styles.greetingsTitle, { lineHeight: 30 }]}>
          Faça seu cadastro para ter acesso. É rapidinho.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <FontAwesome name="google" size={35} color="#000" style={{ marginRight: 20 }} />
          <Text style={styles.buttonText}>Entrar com Google</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default SignIn
