import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./style";
import ResultImc from "./resultimc";

export default function Form() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [messageIMC, setMessageIMC] = useState("Preencha o peso e altura");
  const [IMC, setIMC] = useState(null);
  const [textButton, setTextButton] = useState("Calcular IMC");
  const [errorMessage, setErrorMessage] = useState(null);

  const imcCalculator = () => {
    setHeight(parseFloat(height));
    setWeight(parseFloat(weight));
    return setIMC((weight / (height * height)).toFixed(2));
  };

  const verificationIMC = () => {
    if (IMC == null) setErrorMessage("campo obrigatório*");
  };

  const validationIMC = () => {
    if (weight != "" && height != "") {
      imcCalculator();
      setHeight("");
      setWeight("");
      setMessageIMC("Seu imc é igual: ");
      setTextButton("Calcular Novamente");
      return;
    }

    setIMC(null);
    setTextButton("Calcular");
    setMessageIMC("Preencha o peso e altura");
    setErrorMessage(null);
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
