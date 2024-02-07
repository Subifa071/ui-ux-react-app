import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Alert,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ios = Platform.OS === "ios";

export default function RegisterScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className={ios ? "-mb-2 " : "mb-3 "}>
        <StatusBar style="light" />
        <View className="flex flex-column  h-full">
          <View className="flex items-center gap-10 mt-20">
            <Text className="text-7xl font-bold text-center">Critix</Text>
            <Text className="text-2xl text-center">Create a new Account</Text>
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
              <Text className="mb-1 font-medium">Phone Number</Text>
              <TextInput
                className={
                  "w-full  border-[1px] border-[#0A0A0A] p-2 rounded-lg"
                }
                placeholder="Enter your phone number, ex: +97798189271273"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>

            <View>
              <Text className="mb-1 font-medium">Password</Text>
              <TextInput
                className={
                  "w-full  border-[1px] border-[#0A0A0A] p-2 rounded-lg"
                }
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>

            <View>
              <Text className="mb-1 font-medium">Confirm Password</Text>
              <TextInput
                className={
                  "w-full  border-[1px] border-[#0A0A0A] p-2 rounded-lg"
                }
                placeholder="Enter password again"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
            </View>

            <View>
              <TouchableOpacity
                className="items-center bg-[#F4AE0D] text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
                onPress={() => {
                  Alert.alert(
                    "Registered Successfully",
                    "Proceed to login page",
                    [
                      {
                        text: "OK",
                        onPress: () => {
                          navigation.navigate("Login");
                        },
                      },
                    ]
                  );
                }}
              >
                <Text className="text-white font-semibold">Sign Up</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                className="cursor-pointer"
                onPress={() => navigation.navigate("Login")}
              >
                <Text className="text-[#0A0A0A] text-center font-medium">
                  Already have an account? Sign in
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
