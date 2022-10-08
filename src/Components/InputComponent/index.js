import React from 'react';
import { View, Text ,Dimensions , StyleSheet  ,TextInput} from 'react-native';

export default function Input(props) {
    const{title , placeholder  , password}  =props 
    return (
        <View style={[{ paddingBottom: 10 }]}>
            <Text style={[style.font_Color]}>{title}</Text>
            <TextInput style={[style.textinput]} placeholder={placeholder} secureTextEntry={password} placeholderTextColor={'#fff'} />
        </View>
    );
}

const win = Dimensions.get('window')
const style = StyleSheet.create({
  
    font_Color: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '600',
    },
    input_cont: {
        margin: 20
    },
    textinput: {
        padding: 15,
        borderColor: '#3c5c64',
        width: '95%',
        borderWidth: 0.9,
        marginTop: 15,
        alignSelf: 'center',
        borderRadius: 15,
        color: '#fff',
        backgroundColor: 'rgba(21,48,48,255)',
    },
   
})
