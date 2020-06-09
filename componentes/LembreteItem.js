import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native'

const LembreteItem = (props) => {
    return (
        <TouchableNativeFeedback onPress={props.onDelete.bind(this, props.chave)}>
            <View style={estilos.itemNaLista}>
                <Text>{props.lembrete}</Text>
            </View>
        </TouchableNativeFeedback>
    )
}


const estilos = StyleSheet.create({
    itemNaLista: {
        padding: 12,
        backgroundColor: '#EEE',
        borderColor: '#CCC',
        borderWidth: 1,
        marginBottom: 8,
        borderRadius: 8,
    }
});


export default LembreteItem;