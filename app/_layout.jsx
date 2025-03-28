import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const HeaderLogout = () => {
  const { user, logout } = useAuth();

  return user ? (
    <TouchableOpacity style={styles.logoutButton} onPress={logout}>
      <Text style={styles.logoutText}>Logout</Text>
    </TouchableOpacity>
  ) : null;
};

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
          headerRight: () => <HeaderLogout />,
          contentStyle: {
            paddingHorizontal: 10,
            paddingTop: 10,
            backgroundColor: "#19291",
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="notes" options={{ headerTitle: "Squad List" }} />
        <Stack.Screen name="auth" options={{ headerTitle: "Login" }} />
      </Stack>
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    marginRight: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#ff3b30",
    borderRadius: 8,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RootLayout;
