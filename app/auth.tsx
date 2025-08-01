import { KeyboardAvoidingView, Platform, Text, View } from "react-native";

import { Show } from "@/components/show";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, TextInput } from "react-native-paper";
import { z } from "zod";

type FormData = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export default function Auth() {
  const [isSigneUp, setIsSignUp] = useState<boolean>(false);

  const form = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="p-2 flex flex-col gap-y-3">
        <Text>Create Account</Text>

        <View className="flex flex-col gap-y-1">
          <Controller
            control={form.control}
            name="email"
            render={({ field }) => (
              <TextInput
                {...field}
                onChangeText={field.onChange}
                placeholder="Email"
                keyboardType="email-address"
                mode="outlined"
                label="Email"
                autoCapitalize="none"
              />
            )}
          />
          <Show when={form.formState.errors.email?.message}>
            <Text className="text-red-500 bg-white font-bold">
              {form.formState.errors.email?.message}
            </Text>
          </Show>
        </View>

        <View className="flex flex-col gap-y-1">
          <Controller
            control={form.control}
            name="password"
            render={({ field }) => (
              <TextInput
                {...field}
                onChangeText={field.onChange}
                placeholder="Enter Password"
                mode="outlined"
                label="Password"
                autoCapitalize="none"
              />
            )}
          />
          <Show when={form.formState?.errors?.password?.message}>
            <Text className="text-red-500 bg-white font-bold">
              {form.formState.errors.password?.message}
            </Text>
          </Show>
        </View>

        <Button mode="contained" onPress={form.handleSubmit(onSubmit)}>
          <Show when={isSigneUp}>Sign Up</Show>
          <Show when={!isSigneUp}>Sign In</Show>
        </Button>

        <Button
          mode="text"
          onPress={() => {
            setIsSignUp((prv) => !prv);
          }}
        >
          <Show when={isSigneUp}>Already have an account? Sign in</Show>
          <Show when={!isSigneUp}>Dont Have account? Sign up</Show>
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
