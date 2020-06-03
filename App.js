import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [lembrete, setLembrete] = useState('');

  const [lembretes, setLembretes] = useState([]);

  const [contadorLembretes, setContadorLembretes] = useState(0);

  const capturarLembrete = (lembrete) => {
    setLembrete(lembrete);
  }

  const adicionarLembrete = () => {
    setLembretes((lembretes) => {
      setContadorLembretes(contadorLembretes + 1);
      return [...lembretes, { key: contadorLembretes.toString(), value: lembrete }]
    });
    console.log(lembretes);
    //console.log(lembrete);
  }

  return (
    <View style={estilos.telaPrincipalView}>

      <View style={estilos.lembreteView}>
        {/*usuário irá inserir lembretes aqui */}
        <TextInput
          placeholder="Lembrar..."
          style={estilos.lembreteTextInput}
          onChangeText={capturarLembrete}
          value={lembrete}
        />
        <Button
          title="+"
          onPress={adicionarLembrete}
        />
      </View>

      <View>

        <FlatList

          data={lembretes}
          renderItem={
            lembrete => (
              <View style={estilos.itemNaLista}>
                <Text>{lembrete.item.value}</Text>
              </View>
            )
          }
        />
        {/*aqui será exibida a lista de lembretes */}
        {
          /* 
          
            <ScrollView>
          {lembretes.map((lembrete) => (
            <View style={estilos.itemNaLista}>
              <Text
                key={lembrete}>
                {lembrete}
              </Text>
            </View>
          ))}
        </ScrollView>
          
          */
        }


      </View>

    </View>
  );
}

const estilos = StyleSheet.create({
  itemNaLista: {
    padding: 12,
    backgroundColor: '#EEE',
    borderColor: '#CCC',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
  },
  telaPrincipalView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lembreteTextInput: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginBottom: 4,
    padding: 4,
    backgroundColor: '#EEE'
  }
});
