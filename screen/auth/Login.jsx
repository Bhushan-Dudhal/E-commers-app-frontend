import { Image, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import InputBox from '../../components/Form/InputBox'

const Login = ({navigation}) => {
  const LoginImage = 'https://www.manjulindia.com/images/login.png';

  const [email,setEmail]=useState('')
  const [password, setPassword] = useState('')
  
  //login function

  const handleLogin = () => {
    if (!email || !password) {
      return alert('Please add Email or Password')
    } else {
      alert("Login Successfully")
      // console.assert('eee')
      // console.warn("Login Successfully")
      navigation.navigate('home')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'gray'}/>
      <Image style={styles.LoginImG} source={{uri:LoginImage}}/>
      <InputBox placeholder={"Enter Your Email"} autoComplete={"email"}
        value={email}
        setValue={setEmail}
      />
      <InputBox value={password} setValue={setPassword} placeholder={"Enter Your Password"} secureTextEntry={true} />

      <View style={styles.BtnContainer}>
         <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.BtnText}>Login</Text>
        </TouchableOpacity>
        <Text>Already a User Please? <Text style={styles.BtnMessage} onPress={()=>navigation.navigate('register')}> Register Here</Text></Text>
     </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  LoginImG: {
    width: '100%',
    height: 210,
    resizeMode: 'contain',
    marginVertical:30
  },
  container: {
    // alignItems: 'center',
    justifyContent: 'center',
    height:'100%'
  },
  loginBtn: {
    backgroundColor: '#000000',
    width: '80%',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
    marginVertical:20
  },
  BtnContainer: {
    justifyContent: 'center',
    alignItems:'center'
  },
  BtnText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 17,
    fontWeight:'700'
  },
  BtnMessage: {
    fontWeight: '600',
    color:"blue"
  }
})