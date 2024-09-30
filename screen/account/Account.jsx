import { Image, StyleSheet, Text, View,  } from 'react-native'
import React from 'react'
import Layout from '../../components/Layout/Layout'
import { UserData } from '../../data/UserData'
import { TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';


const Account = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.container}>
        <Image style={styles.userImage} source={{uri:UserData.profilePic}}/>
        <View style={styles.TextCon}>
          <Text style={styles.name}>Hi <Text style={{color:'green'}}>{UserData.name }👋</Text> </Text>
        
           <Text>email: {UserData.email }</Text>
          <Text>contact: {UserData.contact }</Text>
        </View>

        <View style={styles.BtnContainer}>
          <Text style={styles.BtnContainerText}>Account Setting</Text>

          <TouchableOpacity style={styles.Btn} onPress={()=>navigation.navigate('profile',{id:UserData._id})}>
            <AntDesign style={styles.BtnText} name='edit' />
            <Text style={styles.BtnText}>Edit Profile</Text>
          </TouchableOpacity>

            <TouchableOpacity style={styles.Btn} onPress={()=>navigation.navigate('myoder')}>
            <AntDesign style={styles.BtnText} name='bars' />
            <Text style={styles.BtnText}>My Order</Text>
          </TouchableOpacity>

          
            <TouchableOpacity style={styles.Btn} onPress={()=>navigation.navigate('notification')}>
            <AntDesign style={styles.BtnText} name='bells' />
            <Text style={styles.BtnText} >Notification </Text>
          </TouchableOpacity>

           <TouchableOpacity style={styles.Btn} onPress={()=>navigation.navigate('adminPanel')}>
            <AntDesign style={styles.BtnText} name='windowso' />
            <Text style={styles.BtnText} >Admin Panel</Text>
          </TouchableOpacity>

        </View>
       
      </View>
    </Layout>
  )
}

export default Account

const styles = StyleSheet.create({

    container: {
    marginVertical:20,
  },
  userImage:{
    height: 100,
    width:" 100%",
    resizeMode: 'contain'
    
  },
  
  TextCon: {
    justifyContent: 'center',
    alignItems:'center'
  },
  name: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    fontStyle: "italic",
    fontFamily:""
  },
  BtnContainer: {
    padding: 10,
    backgroundColor: '#ffffff',
    margin: 10,
    marginVertical: 20,
    elevation: 5,
    borderRadius: 10,
    paddingBottom:30,
    
  },
  BtnContainerText: {
   textAlign:'center',
    fontSize: 20,
    fontWeight: '900',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor:'lightgray'
  },
 
  Btn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding:5
  },
  BtnText: {
    fontSize: 15,
    marginRight: 10,
   Color:'#000000'
    
  }
})