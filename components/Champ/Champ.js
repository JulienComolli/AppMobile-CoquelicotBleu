import React from "react"
import { StyleSheet, Text, View, TextInput } from "react-native";


const Champ = ({title, placeholder, password, setText}) => {
    return (
        <View style={styles.champ}>
            <Text style={styles.inputText}>{title}</Text>
            <TextInput secureTextEntry={password} placeholder={placeholder} style={styles.input} onChangeText={newText => {setText(newText)}}/>
        </View>
    );
}

export default Champ;

const styles = StyleSheet.create({
    champ: {
        alignSelf: 'center',
        height: 70,
        width: 330,
    },
    input: {
        borderColor: 'black',
        backgroundColor: "white",

        fontSize: 17,
        fontWeight: '900',
        height: 52,
        borderWidth: 2,
        paddingLeft: 20
    },
    inputText: {
        fontSize: 13,
        fontWeight: '900',
        color: 'black',
    }
});