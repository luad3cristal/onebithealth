import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./style";
import ResultImc from "./resultimc";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura");
  const [IMC, setIMC] = useState(null);
  const [textButton, setTextButton] = useState("Calcular IMC");

  const imcCalculator = () => {
    return setIMC((weight / (height * height)).toFixed(2));
  };

  const validationIMC = () => {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageIMC("Seu imc é igual: ");
      setTextButton("Calcular Novamente");
      return;
    }

    setIMC(null);
    setTextButton("Calcular");
    setMessageIMC("Preencha o peso e altura");
  };

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          placeholder="Ex.: 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
          style={styles.input}
        ></TextInput>

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex.: 75.365"
          keyboardType="numeric"
          style={styles.input}
        ></TextInput>

        <TouchableOpacity
          style={styles.buttonCalculador}
          onPress={() => validationIMC()}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>

      <ResultImc message={messageIMC} result={IMC} />
    </View>
  );
}
