import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { MaterialIcons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';

const Catalog = ({ navigation }) => {

    // const handleOnPress = () => {
    //     navigation.navigate('MyCourse')
    // }
  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            {/* <View style={styles.titleContainer}>
                <TouchableOpacity onPress = {handleOnPress}>
                    <MaterialIcons name="keyboard-backspace" size={24} color="#FBFCC8" />
                </TouchableOpacity>
            
            <Text style={styles.title}>Catalog</Text>
            </View> */}

            <View style={styles.backgroundContainer}>
                <ImageBackground source={require('../../assets/images/welcome.jpg')} style={styles.images} resizeMode='cover'>
                    <Text style={styles.imageText}>welcome to course correct</Text>
                </ImageBackground>
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.details}>
                    find below course offered by the school of science and engineering.
                </Text>
            </View>
            <View style={styles.coursesContainer} >

                <TouchableOpacity onPress = {() => navigation.navigate ('Computer Science')}>
                <ImageBackground source={require('../../assets/images/computer.jpg')} style={styles.image} resizeMode='cover'>
                    <Text style={styles.courseText}>COMPUTER SCIENCE</Text>
                </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => navigation.navigate ('Mathematics')}>
                <ImageBackground source={require('../../assets/images/maths.jpg')} style={styles.image} resizeMode='cover'>
                    <Text style={styles.courseText}>MATHEMATICS</Text>
                </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => navigation.navigate ('Science')}>
                <ImageBackground source={require('../../assets/images/science.jpg')} style={styles.image} resizeMode='cover'>
                    <Text style={styles.courseText}>SCIENCE</Text>
                </ImageBackground>
                </TouchableOpacity>

                <TouchableOpacity onPress = {() => navigation.navigate ('Engineering')}>
                <ImageBackground source={require('../../assets/images/engineering.jpg')} style={styles.image} resizeMode='cover'>
                    <Text style={styles.courseText}>ENGINEERING</Text>
                </ImageBackground>
                </TouchableOpacity>

            </View>


        </ScrollView>
      
    </SafeAreaView>

  )
}

export default Catalog

const styles = StyleSheet.create({
    container : {
        flex:1,
        // backgroundColor: '#B3A9A9'
    },
    titleContainer : {
        display: 'flex',
        flexDirection: 'row',
        flex: 0.1,
        backgroundColor: '#2B1F68',
        height: 50,
        paddingVertical: 10,
        paddingHorizontal: 15,
        display: 'flex',
        justifyContent: 'space-between'
    },
    title: {
        color: '#FBFCC8',
        fontSize: 20,
        textDecorationStyle: 'solid',
        textTransform: 'uppercase',
        
    },
    image: {
        height: 120,
        justifyContent: 'center',
        flex: 1
    },
    imageText: {
        color: '#FFF',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '500',
        alignSelf: 'auto',
        paddingTop: 80
    },
    backgroundContainer: {
        flex: 0.2
    },
    detailsContainer: {
        flex:0.08,
        alignContent: 'center',
        justifyContent: 'center'
    },
    details: {
        fontSize: 18,
        fontWeight: '300',
        textTransform: 'uppercase',
        textAlign: 'center',
        paddingTop: 20
    },
    image: {
        height: 100,
        paddingVertical: 20,
        marginTop: 3,
        // opacity: 0.5
    },
    coursesContainer: {
        marginTop: 20,
        display: 'flex',
        paddingHorizontal: 16

    },
    courseText: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    images: {
        opacity: 0.88
    },
})