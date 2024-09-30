import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputBox = ({value,setValue,autoComplete,placeholder,secureTextEntry}) => {
  return (
    <View style={styles.container}>
          <TextInput style={styles.input} autoComplete={autoComplete} placeholder={placeholder}
              autoCorrect={false}
              secureTextEntry={secureTextEntry}
              value={value}
              onChangeText={(text)=>setValue(text)}
          />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:10
    },
    input: {
        width:'80%',
        // backgroundColor: '',
        height: 40,
        paddingLeft: 10,
        borderRadius: 10,
        color: "#000000",
        borderWidth: 1,
        borderColor: "#000000",
        fontSize: 20,
        fontWeight: '900',
        // marginVertical: 7,
        
    }
})

export default InputBox
