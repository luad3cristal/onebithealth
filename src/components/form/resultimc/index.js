import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultImc({ result, message }) {
  const onShare = async () => {
    const shareResult = await Share.share({
      message: "Meu imc hoje é: " + result,
    });
  };

  return (
    <View style={styles.resultImc}>
      <View style={styles.boxShareButton}>
        {result != null && (
          <TouchableOpacity onPress={onShare} style={styles.shared}>
            <Text style={styles.sharedText}>Share</Text>
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.info}>{message}</Text>
      <Text style={styles.numberImc}>{result}</Text>
    </View>
  );
}
