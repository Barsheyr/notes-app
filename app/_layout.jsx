import { Stack } from "expo-router";
import { AuthProvider } from "../contexts/AuthContext";

const RootLayout = () => {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f73939",
          },
          headerTintColor: "#fff8f8",
          headerTitleStyle: {
            fontSize: 30,
            fontWeight: "bold",
          },
          // headerRight: () => <HeaderLogout />,
          contentStyle: {
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: "#f52b2b",
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="notes" options={{ headerTitle: "Squad List" }} />
        {/* <Stack.Screen name="auth" options={{ headerTitle: "Login" }} /> */}
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
