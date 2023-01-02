import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const Login = ({ navigation }) => {

    

  return (
    <SafeAreaView style = {styles.container}>
      
        {/* <View style = {styles.headerContainer}>
            <Text style = {styles.headerText}>course correct</Text>
        </View> */}

        <View style = {styles.imageContainer}>
            <Image style = {styles.logo} source = {require('../../assets/images/logo.jpg')}></Image>
        </View>

        

        
            <Text style = { styles.line}></Text>


            <View style = {styles.detailsContainer}>
                <Text style = {styles.details}>welcome to the course correct home screen.</Text>
                <Text style = {styles.detail}>lets begin your academic adventure! select a course!</Text>
            </View>

            
            

    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    headerContainer : {
        flex: 0.1,
        backgroundColor: '#2B1F68',
        padding: 10,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    headerText : {
        fontSize: 28,
        color:'#FBFCC8',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    imageContainer: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
        
    line : {
      
        backgroundColor : '#E7E7E7',
        height : 1,
        marginHorizontal : 18,
        marginTop : 15
    },
    
        detailsContainer : {
            // justifyContent : 'center',
            // alignItems : 'center',
            flex: 0.6,
            backgroundColor: '#2B1F68',
            padding: 10
            
        },
        button : {
            backgroundColor : '#2B1F68',
            height : 40,
            width : '100%',
            justifyContent : 'center',
            alignItems : 'center',
            borderRadius : 3
        },
        text : {
            color : 'white',
            fontWeight : 'bold',
            fontSize : 18,
            color: '#FBFCC8'
        },
        details : {
          fontWeight: '200',
          fontSize: 30,
          textTransform: 'capitalize',
          color: '#FBB500',
          marginTop: 30,
          marginHorizontal: 30
        },
        detail : {
          fontWeight: '200',
          fontSize: 30,
          textTransform: 'capitalize',
          color: '#FBB500',
          marginTop: 50,
          marginHorizontal: 10
        },
       
   
    
   
})