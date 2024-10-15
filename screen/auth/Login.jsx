import { Image, StatusBar, StyleSheet, Text,  View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import InputBox from '../../components/Form/InputBox'

import {useDispatch,useSelector} from "react-redux"
import { login } from '../../redux/features/auth/userAction'
const Login = ({navigation}) => {
  const LoginImage = 'https://www.manjulindia.com/images/login.png';
  const [email,setEmail]=useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch();


  const { loading, error, message } = useSelector(state=>state.user)
  
 
  
  

  const handleLogin = () => {
    if (!email || !password) {
      return alert('please add email or password')
    } 
    dispatch(login(email,password))
    // alert(message)
    // navigation.navigate('home')
    // alert("login success ful")
    
  }
  
  useEffect(() => {
    if (error) {
      alert(error)
      dispatch({type:'clearError'})
    }
    
     if (message) {
       alert(message)
       dispatch({ type: 'clearMessage' })
       navigation.navigate('home')
       
      }
    },[error,message,dispatch])
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