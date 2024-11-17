import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { UserData } from '../../data/UserData'
import { Image } from 'react-native'
import InputBox from '../../components/Form/InputBox'
import { TouchableOpacity } from 'react-native'

const Profile = ({navigation}) => {


  const [profilePic, setProfilePic] = useState(UserData.profilePic)
  const [email, setEmail] = useState(UserData.email)
  const [password, setPassword] = useState(UserData.password)
  const [name, setName] = useState(UserData.name)
  const [address, setAddress] = useState(UserData.address)
    const [contact, setContact] = useState(UserData.contact)
    //update profile
    
    const handleUpdate = () => {
        if (!name || !email || !contact || !password || !address) {
            return alert('Please provide all fields')
        } else {
            alert("Profile Update Successfully")
            navigation.navigate('account')
        }
    }


  return (
    <View>
        <View style={styles.container}>
         <ScrollView>
                  <View style={styles.ImageCon}>
                      <Image style={styles.ImagePic} source={{ uri: profilePic }} /> 
                      <Pressable>
                          <Text style={{
                              color: 'red',
                              marginTop: 10,
                              fontSize: 15,
                              }}>update your profile pic</Text>
                          
                      </Pressable>
                  </View>  
                  <InputBox value={name} setValue={setName} placeholder={'enter your name'} autoComplete={'name'} />

                       <InputBox value={contact} setValue={setContact} placeholder={'enter your contact'} autoComplete={'contact'} />
                  
                   <InputBox value={email} setValue={setEmail} placeholder={'enter your email'} autoComplete={'email'} />
                  
                   <InputBox value={password} setValue={setPassword} placeholder={'enter your password'} autoComplete={'password'} secureTextEntry={true} />
                  

                   <InputBox value={address} setValue={setAddress} placeholder={'enter your address'} autoComplete={'address-line1'} />
                  
                  <TouchableOpacity style={styles.Btn} onPress={handleUpdate}>
                   <Text style={styles.BtnText}>UPDATE PROFILE</Text>
                  </TouchableOpacity>     
                   
        </ScrollView>   
     </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        marginVertical:20
    },
    ImagePic: {
        height: 100,
        width: '100%',
        resizeMode:'contain'
    },
    ImageCon: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    Btn: {
        backgroundColor: '#000000',
        height: 40,
        borderRadius: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        marginTop: 10,
          
    },
    BtnText: {
        color: "#ffffff",
        textAlign: 'center',
        fontWeight:'bold'
    },
    pro: {
        
    },
    pro1: {
        
    }
})
export default Profile

