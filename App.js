import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from 'react-native';

import LembreteItem from './componentes/LembreteItem';

import LembreteInput from './componentes/LembreteInput';

export default function App() {

  //const [lembrete, setLembrete] = useState('');

  const [lembretes, setLembretes] = useState([]);

  const [contadorLembretes, setContadorLembretes] = useState(0);

  /*const capturarLembrete = (lembrete) => {
    setLembrete(lembrete);
  }*/

  const adicionarLembrete = (lembrete) => {
    setLembretes((lembretes) => {
      setContadorLembretes(contadorLembretes + 1);
      return [...lembretes, { key: contadorLembretes.toString(), value: lembrete }]
    });
    console.log(lembretes);
    //console.log(lembrete);
  }

  const removerLembrete = (keyASerRemovida) => {
    setLembretes(lembretes => {
      return lembretes.filter((lembrete) => { return lembrete.key !== keyASerRemovida })
    })
  }

  return (
    <View style={estilos.telaPrincipalView}>

      <LembreteInput onAdicionarLembrete={adicionarLembrete} />

      <View>

        <FlatList

          data={lembretes}
          renderItem={
            lembrete => (
              <LembreteItem
                chave={lembrete.item.key}
                lembrete={lembrete.item.value}
                onDelete={removerLembrete}
              />
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
