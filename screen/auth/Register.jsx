import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native';
import InputBox from '../../components/Form/InputBox';

const Register = ({navigation}) => {
  const LoginImage = 'https://png.pngtree.com/png-vector/20220526/ourmid/pngtree-online-registration-or-sign-up-login-for-account-on-smartphone-app-png-image_4740836.png';
 
    const [name, setName] = useState('')

  const [email,setEmail]=useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [contact, setContact] = useState('')



  
  //login function

  const handleRegister = () => {
    if (!email || !password || !name || !address||!contact) {
      return alert('Please Provide all Fields')
    } else {
      alert("Login Successfully")
      // console.assert('eee')
      // console.warn("Login Successfully")
      navigation.navigate('home')
    }
  }

    return (
      
        <View style={styles.container}>
      <StatusBar backgroundColor={'violet'} />
            
          <Image style={styles.LoginImG} source={{ uri: LoginImage }} />
          
            <InputBox placeholder={"Enter Your Name"} autoComplete={"name"}
        value={name}
        setValue={setName}
      />
      <InputBox placeholder={"Enter Your Email"} autoComplete={"email"}
        value={email}
        setValue={setEmail}
      />
        <InputBox value={password} setValue={setPassword} placeholder={"Enter Your Password"} secureTextEntry={true} />
        

        <InputBox value={address} setValue={setAddress} placeholder={"Enter Your Address"}  />
        
          <InputBox value={contact} setValue={setContact} placeholder={"Enter Your Number"} secureTextEntry={true} />

      <View style={styles.BtnContainer}>
         <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
        <Text style={styles.BtnText} >Register</Text>
        </TouchableOpacity>
        <Text>Already a User Please? <Text style={styles.BtnMessage} onPress={()=>navigation.navigate('login')}> Login Here</Text></Text>
     </View>
    </View>
  )
}

export default Register

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