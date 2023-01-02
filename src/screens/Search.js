import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

import { MaterialIcons } from '@expo/vector-icons';

const Search = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        {/* <View style={styles.titleContainer}>
                <TouchableOpacity>
                    <MaterialIcons name="keyboard-backspace" size={24} color="#FBFCC8" />
                </TouchableOpacity>
            
            <Text style={styles.title}>Search</Text>
            </View> */}

            <View style={styles.searchContainer}>
                <Text style={styles.search}>Enter A Keyword</Text>
                <TextInput autoCapitalize='false' autoComplete='true' autoCorrect='true'></TextInput>
                <Text style={styles.line}></Text>
            </View>

            
                <TouchableOpacity style={styles.butContainer}>
                    <Text style={styles.buText}>SEARCH</Text>
                </TouchableOpacity>
            

            
            
    </SafeAreaView>
  )
}

export default Search

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
    
    line: {
        backgroundColor: 'red',
        height: 1,
        width: '90%'
    },
    searchContainer: {
        flex: 0.35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    search: {
        marginBottom: 30,
        
    },
    butContainer: {
        backgroundColor:  '#2B1F68',
        height: 40,
        // width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        borderRadius: 3
    },
    buText: {
        color: '#FBFCC8',
        fontSize: 18
    }
    
})