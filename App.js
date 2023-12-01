import React from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("./assets/pexels.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("./assets/1.jpg")}
          style={styles.logo}
        />
      </View>
      <View style={styles.formContainer}>
        <View style={[styles.inputField, { backgroundColor: "#1F2421", borderColor: "#49A078", borderWidth: 1, height: 60 }]}>
          <Text style={{ color: "#white" }}>Surname</Text>
        </View>
        <View style={[styles.inputField, { backgroundColor: "#1F2421", borderColor: "#49A078", borderWidth: 1, height: 60 }]}>
          <Text style={{ color: "#white" }}>Password</Text>
        </View>
        <View style={[styles.button, { backgroundColor: "#49A078", height: 60 }]}>
          <Text style={{ color: "white" }}>Login</Text>
        </View>
        <View style={[styles.button, { backgroundColor: "#49A078", height: 60 }]}>
          <Text style={{ color: "white" }}>Create account</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    position: "absolute",
    top: windowHeight * 0.20,
    alignItems: "center",
    justifyContent: "center",
    width: windowWidth,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  backgroundImage: {
    width: windowWidth,
    height: windowHeight,
    position: "absolute",
    zIndex: -1,
  },
  formContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 300, // Augmente la marge vers le bas
  },
  inputField: {
    width: windowWidth * 0.8,
    height: 50, // Augmente la hauteur des champs
    backgroundColor: "#1F2421",
    marginBottom: 20, // Augmente l'espacement entre les champs
    borderColor: "#49A078",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: windowWidth * 0.8,
    height: 50, // Augmente la hauteur des boutons
    backgroundColor: "green",
    marginBottom: 10, // Augmente l'espacement entre les boutons
    borderColor: "#49A078",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
