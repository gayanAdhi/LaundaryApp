import React, { useEffect, useState } from "react";
import { Image, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { LinearGradient } from "expo-linear-gradient";

function SplashScreen(props) {
  const [isGo, setIsGo] = useState(true);
  const Navigation = useNavigation();

  useEffect(() => {
    if (isGo === true) {
      setTimeout(() => {
        Navigation.navigate("Login");
      }, 3000);
    }
  });
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        // Button Linear Gradient
        colors={["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]}
        style={{ flex: 1 }}
      >
        <View style={{ flex: 1, alignItems: "center", paddingTop: "40%" }}>
          <Image
            source={require("../assets/0.png")}
            style={{ height: 220, width: 220 }}
          />
          <Text
            style={{
              fontSize: 35,
              fontWeight: "500",
              color: "#318ce7",
              marginTop: -2,
            }}
          >
            --SmartSuds--
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

export default SplashScreen;
