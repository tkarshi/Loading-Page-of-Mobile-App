import React, { useState, useEffect } from "react";
import { View, Image, showInput } from "react-native";

function Loading() {
  const [showHome, setShowHome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHome(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return showHome ? (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F6AF8F",
      }}
    >
      <Image
        style={{
          resizeMode: "cover",
          height: 112,
          width: 107,
          borderRadius: 33,
        }}
        source={require("../assets/logo3.png")}
      />
    </View>
  ) : (
    <Login />
  );
}

export default Loading;
