import { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import PostItImage from "@/assets/images/Liverpool_FC.svg";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";

const HomeScreen = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/notes");
    }
  }, [user, loading]);

  if (loading) {
    return (
      <View style={styles.centeredContainter}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={PostItImage} style={styles.image} />
      <Text style={styles.title}> Welcome To Liverpool Squad List </Text>
      <Text style={styles.subtitle}>
        The best team in the world, You'll never walk alone
      </Text>
      <Text> Scourers </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/notes")}
      >
        <Text style={styles.buttonText}> Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f53232",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#f8f5f5",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#f5f1f1",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  centeredContainter: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default HomeScreen;
