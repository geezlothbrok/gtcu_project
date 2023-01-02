import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import { MaterialIcons } from '@expo/vector-icons';

const Maths = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        {/* <View style={styles.titleContainer}>
                <TouchableOpacity>
                    <MaterialIcons name="keyboard-backspace" size={24} color="#FBFCC8" />
                </TouchableOpacity>
            
            <Text style={styles.title}>mathematics</Text>
            </View> */}

            <View style={styles.aboutContainer}>
                <Text style={styles.about}>
                    MATHEMATICS
                </Text>
            </View>
    </SafeAreaView>
  )
}

export default Maths

const styles = StyleSheet.create({
    container: {
        flex: 1
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
    aboutContainer: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    about: {
        fontSize: 30,
        fontWeight: 'bold'
    },
})