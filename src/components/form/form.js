import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
} from "react-native";

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
    let heightFormat = height.replace(",", ".");
    return setIMC((weight / (heightFormat * heightFormat)).toFixed(2));
  };

  const verificationIMC = () => {
    if (IMC == null) {
      Vibration.vibrate();
      setErrorMessage("campo obrigatório*");
    }
  };

  const validationIMC = () => {
    if (weight != "" && height != "") {
      imcCalculator();
      setHeight("");
      setWeight("");
      setMessageIMC("Seu imc é igual: ");
      setTextButton("Calcular Novamente");
      setErrorMessage(null);
    } else {
      setIMC(null);
      setTextButton("Calcular");
      setMessageIMC("Preencha o peso e altura");
      verificationIMC();
    }
  };

  return (
    <View onPress={Keyboard.dismiss} style={styles.formContext}>
      {IMC == null ? (
        <Pressable style={styles.form}>
          <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
          <TextInput
            placeholder="Ex.: 1.75"
            keyboardType="numeric"
            onChangeText={setHeight}
            value={height}
            style={styles.input}
          ></TextInput>

          <Text style={styles.formLabel}>Peso</Text>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
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
        </Pressable>
      ) : (
        <View style={styles.exhibitonResultImc}>
          <ResultImc message={messageIMC} result={IMC} />

          <TouchableOpacity
            style={styles.buttonCalculador}
            onPress={() => validationIMC()}
          >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
