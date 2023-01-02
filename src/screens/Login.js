import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const Login = ({ navigation }) => {

    const [form, setform] = useState({ email: '', password: '' });

    const handleOnChange = (name, text) => {
		setform({ ...form, [name]: text });
	};

  return (
    <SafeAreaView style = {styles.container}>
        <ScrollView>
        <View style = {styles.headerContainer}>
            <Text style = {styles.headerText}>course correct</Text>
        </View>

        <View style = {styles.imageContainer}>
            <Image style = {styles.logo} source = {require('../../assets/images/logo.jpg')}></Image>
        </View>

        <View style = {styles.infoTextContainer}>
            <Text style = {styles.infoText}>
                use course correct to improve your academic performance and enhance your  
            </Text><Text style = {styles.know}>general knowledge!!</Text>
            
        </View>

        <View style = {styles.emailContainer}>
                <Text style = {styles.id}>ID</Text>
                <TextInput style = {styles.email}
                autoCompleteType = 'email'
                autoCorrect = {false}
                textAlign = 'right'
                autoCapitalize = 'none'
                onChangeText = {(text) => {
                    handleOnChange('email', text);
                }} 
                value ={form.email}
                >
                </TextInput>
            </View>
            <Text style = { styles.line}></Text>

            <View style = {styles.passwordContainer}>
                <Text>Password</Text>
            <TextInput
				style={styles.passwordInput}
				secureTextEntry={true}
                textAlign = 'right'
				autoCompleteType="password"
				autoCapitalize="none"
				autoCorrect={false}
                onChangeText={(text) => {
                    handleOnChange('password', text);
                    }}
                    value={form.password}
			/>
            </View>
            <Text style = { styles.line}></Text>

            <View style = {styles.buttonContainer}>
                <TouchableOpacity style = {styles.button} onPress = {() => navigation.navigate ('Home')}>
                    <Text style = {styles.text}>LOG IN</Text>
                </TouchableOpacity>
            </View>

            <View style = {styles.resetContainer}>
                <View>
                    <Text style = {styles.forgot}>No Account?</Text>
                </View>
                <View style = {styles.reset}>
                    <TouchableOpacity onPress = {() => navigation.navigate ('Register')}>
                        <Text style = {styles.passText}>Create One.</Text>
                        <Text style = {styles.passLine}></Text>
                    </TouchableOpacity>
                </View>
            </View>

            </ScrollView>

    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    headerContainer : {
        flex: 0.08,
        backgroundColor: '#2B1F68',
        padding: 10
    },
    headerText : {
        fontSize: 28,
        color:'#FBFCC8',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    imageContainer: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 20
    },
    infoTextContainer : {
        flex: 0.08,
        // padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    infoText : {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    know : {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    emailContainer : {
        flex : 0.2,
        flexDirection : 'column',
        marginHorizontal : 18
    },
    line : {
        backgroundColor : '#E7E7E7',
        height : 1,
        marginHorizontal : 18,
        marginTop : 10
    },
    email : {
        paddingLeft : 30,
        flex : 1},
        id : {
            color: '#FF5733'
        },
        passwordContainer : {
            flex : 0.2,
            flexDirection : 'column',
            marginHorizontal : 18,
            paddingTop : 10
        },
        passwordInput : {
            paddingLeft : 30,
            flex:1,
            marginTop : 10
        },
        buttonContainer : {
            justifyContent : 'center',
            alignItems : 'center',
            paddingTop : 25,
            marginHorizontal : 18
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
        resetContainer : {
            flexDirection : 'row',
            marginLeft : 18,
            paddingTop : 20,
            alignItems: 'center',
            justifyContent: 'center'
        },
        forgot : {
            fontSize : 15,
            color : '#6E6F71'
        },
        reset : {
            paddingLeft : 6
        },
        passText : {
            fontSize : 15,
            color : '#6E6F71',
            paddingTop: 14
        },
   
    
   
})