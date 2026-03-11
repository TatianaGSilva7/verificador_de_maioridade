import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

  const [anoNascimento, setAnoNascimento] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularIdade = () =>{
    if (!anoNascimento){
      Alert.alert("Erro", "Digite um ano");
      return;
    }
  
   const anoInput  = parseInt (anoNascimento, 10);
   const data = new Date();
   const anoAtual = data.getFullYear();
   const idade = anoAtual - anoInput;
   setResultado(idade);
  
    if (idade >= 18){
    setResultado(`Você tem ${idade} anos. Você é MAIOR de idade.` );
    }
    else
    {
    setResultado(`Você tem ${idade} anos. Você é MENOR de idade.`);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Verificador de Maioridade</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Digite o ano do nascimento:"
        keyboardType="numeric" 

        onChangeText={setAnoNascimento}
      />

      <Button title="Verificar" onPress={calcularIdade} color="#af4c4c" />

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  resultado: {
    marginTop: 30,
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    fontWeight: '600',
  },
});
