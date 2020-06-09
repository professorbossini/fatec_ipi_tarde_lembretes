import React, { useState } from 'react'
import {
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';

const LembreteInput = (props) => {

    const [lembrete, setLembrete] = useState('');
    const capturarLembrete = (lembrete) => {
        setLembrete(lembrete);
    }
    return (
        <View style={estilos.lembreteView}>
            <TextInput
                placeholder="Lembrar..."
                style={estilos.lembreteTextInput}
                onChangeText={capturarLembrete}
                value={lembrete} />
            <Button
                title="+"
                onPress={() => props.onAdicionarLembrete(lembrete)} />
        </View>
    );
}

const estilos = StyleSheet.create({
    lembreteView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
    },
    lembreteTextInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2
    }

});

export default LembreteInput;