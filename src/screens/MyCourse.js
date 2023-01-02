import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, } from 'react-native';


import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const MyCourse = ({navigation}) => {

    

  return (
    <SafeAreaView style = {styles.container}>
      
        <View style = {styles.headerContainer}>
            
                {/* <Text style = {styles.headerText}>course correct</Text> */}
            
            
            <FontAwesome name="leanpub" size={150} color="#FFF" style={{display: 'flex', alignSelf: 'center'}} />
            <Text style={styles.courses}>COURSES</Text>
        </View>

        <View style = {styles.enrollmentContainer}>
            
            <Text style = {styles.enrollmentText}>looks like you are not enrolled in </Text>
            <Text style = {styles.enrollmentOne}>any class, click on the button</Text>   
            <Text style = {styles.enrollmentTwo}>below to check our catalog. </Text>

        </View>

        <View style ={styles.buttonContainer}>
            <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate ('Catalog')}>
                <Text style = {styles.buttonText}>catalog</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default MyCourse

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    headerContainer : {
        flex: 0.4,
        backgroundColor: '#2B1F68',
        // padding: 10,
    },
    headerText : {
        fontSize: 15,
        color:'#FBFCC8',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        display: 'flex',
        textAlign: 'center'
        
    },
    
    enrollmentContainer : {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    courses : {
        color: '#FFF',
        fontSize: 40,
        display: 'flex',
        textAlign: 'center',
        marginTop: 30,
        fontWeight: 'bold'
    },
    enrollmentText: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: 'grey'
    },
    enrollmentOne: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: 'grey'
    },
    enrollmentTwo: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: 'grey'
    },
    buttonContainer: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button : {
        backgroundColor: '#2B1F68',
        height : 50,
        width : '90%',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 3
    },
    buttonText : {
        color: '#FBFCC8',
        fontSize: 20,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
        
    
        
})