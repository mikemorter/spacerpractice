import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../Images/SpacerLogoWords.png")}
      />
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    width: 180,
    height: 70,
  },
});

export default WelcomeScreen;
