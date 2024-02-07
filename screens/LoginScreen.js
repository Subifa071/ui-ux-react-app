import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ios = Platform.OS === "ios";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className={ios ? "-mb-2 " : "mb-3 "}>
        <StatusBar style="light" />
        <View className="flex flex-column  h-full">
          <View className="flex items-center gap-10 mt-20">
            <Text className="text-7xl font-bold text-center">Critix</Text>
            <Text className="text-2xl text-center">Login to your Account</Text>
          </View>

          <View className="p-8 gap-5 shadow-2xl  mt-7  rounded-2xl">
            <View>
              <Text className="mb-1 font-medium">Email</Text>
              <TextInput
                className={
                  "w-full border-[1px] border-[#0A0A0A] p-2 rounded-lg"
                }
                placeholder="Enter your email"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            <View>
              <Text className="mb-1 font-medium">Password</Text>
              <TextInput
                className={
                  "w-full  border-[1px] border-[#0A0A0A] p-2 rounded-lg"
                }
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <View className="flex flex-row justify-between">
              <View className="flex flex-row items-center gap-1">
                <View className="border-[0.5px] h-3 w-3 rounded-sm"></View>
                <Text className="text-[#0A0A0A]">Remember Me</Text>
              </View>

              <Text className="text-[#0A0A0A]">Forgot Password?</Text>
            </View>

            <View>
              <TouchableOpacity
                className="items-center bg-[#F4AE0D] text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                onPress={() => {
                  navigation.navigate("Home");
                }}
              >
                <Text className="text-white font-semibold">Sign In</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                className="pointer"
                onPress={() => navigation.navigate("Register")}
              >
                <Text className="text-[#0A0A0A] text-center font-medium">
                  Don't have an account? Sign up for free
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
