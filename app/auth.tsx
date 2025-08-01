import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Auth() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="p-2 flex flex-col gap-y-3">
        <Text>Create Account</Text>

        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          className="border "
        />
        <TextInput placeholder="Password" />
        <TextInput placeholder="Confirm Password" />
      </View>
    </KeyboardAvoidingView>
  );
}
