import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

function App() {
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');

  const entrar = () => {
    if (input === '') {
      alert('Digite o seu Nome!');
      return;
    }
    setNome('Bem vindo ' + input);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={'Digite o seu Nome'}
        onChangeText={text => setInput(text)}
      />
      <Text style={styles.texto}>{nome}</Text>
      <View style={styles.button}>
        <Button title="Entrar" onPress={entrar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20,
  },
  texto: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 15,
  },
  button: {
    margin: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default App;
