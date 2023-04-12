import { View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { styles } from "../config/style";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase";

export default function CreateUser() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  function cadastrarPessoa() {
    console.log(nome);
    console.log(telefone);
    // usar a função do firebase para cadastrar

    const docRef = addDoc(collection(db, "pessoas"), {
      nomeDaPessoa: nome,
      telefone: telefone,
    });
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
        <TextInput
          label={"Telefone"}
          placeholder="digita seu telefone"
          mode="outlined"
          value={telefone}
          onChangeText={setTelefone}
        />
        <Button onPress={cadastrarPessoa}>Cadastrar</Button>
      </View>
    </View>
  );
}
