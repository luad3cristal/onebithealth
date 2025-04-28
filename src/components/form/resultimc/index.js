import React from "react";
import { View, Text } from "react-native";

export default function ResultImc({ result, message }) {
  return (
    <View>
      <Text>{message}</Text>
      <Text>{result}</Text>
    </View>
  );
}
