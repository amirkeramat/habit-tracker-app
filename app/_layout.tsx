import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import "../global.css";
import useIsMounted from "../hooks/is-mounted";

type Props = {
  children: React.ReactNode;
};

function RouteGourd({ children }: Props) {
  const router = useRouter();
  const isAuth = false;

  useEffect(() => {
    if (!isAuth) {
      router.replace("/auth");
    }
  }, [isAuth]);

  return <>{children}</>;
}

export default function RootLayout() {
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <RouteGourd>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </RouteGourd>
  );
}
