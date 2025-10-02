import { StatusBar } from 'expo-status-bar';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import logo from './assets/todolist.png';
import add from './assets/add.png';
import { useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import imgexcluir from './assets/bin.png'

export default function App() {
  const [tarefa, settarefa] = useState("");
  const [tarefas, settarefas] = useState([]);

  const handleAdd = () => {
    //Alert.alert(tarefa);
    settarefas([tarefa, ...tarefas]);
    settarefa("");
  }

  const renderItem = ({ item }) =>
    <View style={styles.viewItem}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => handleExcluir(item)}>
        <Image style={styles.imgexcluir} source={imgexcluir} alt="Botão Excluir" />
      </TouchableOpacity>
    </View>

    const handleExcluir = (item) => {
      settarefas(tarefas.filter((olditem) => olditem !== item))
    }

  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} style={styles.logo} />
        <Text>Ingrid</Text>
      </View>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="Entre com a tarefa"
          value={tarefa}
          onChangeText={settarefa}
        />
        <TouchableOpacity onPress={handleAdd}>
          <Image source={add} style={styles.add} />
        </TouchableOpacity>
      </View>
      <View style={styles.viewTarefas}>
        <FlashList data={tarefas} renderItem={renderItem} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  logo: {
    height: 128,
    width: 128
  },
  add: {
    height: 32,
    width: 32
  },
  viewInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  viewTarefas: {
    width: "100%",
    flex: 1
  },
  imgexcluir: {
    height: 28,
    width: 28
  },
  viewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10
  }
});
