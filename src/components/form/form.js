import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

import ResultImc from "./resultimc";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageIMC, setMessageIMC] = useState("preencha o peso e a altura");
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
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          placeholder="Ex.: 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        ></TextInput>

        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex.: 75.365"
          keyboardType="numeric"
        ></TextInput>

        <Button title={textButton} onPress={() => validationIMC()} />
      </View>

      <ResultImc message={messageIMC} result={IMC} />
    </View>
  );
}
