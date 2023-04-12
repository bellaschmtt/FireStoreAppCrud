import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../config/style";
import { useState } from "react";

export default function CreateUser() {
  const [nome, setNome] = useState("");
  function cadastrarPessoa() {
    console.log(nome);
  }

  return (
    <View style={styles.container}>
      <Text>Cadastrar Pessoas</Text>
      <View>
        <TextInput
          label={"Nome"}
          placeholder="digita logo"
          mode="outlined"
          value={nome}
          onChangeText={setNome}
        />
        <Button onPress={cadastrarPessoa}>Cadastrar</Button>
      </View>
    </View>
  );
}
