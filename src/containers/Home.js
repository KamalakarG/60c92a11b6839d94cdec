import React, {useState,} from 'react'
import {View, TextInput, StyleSheet, Alert, Keyboard} from 'react-native'
import {Button, Text} from 'native-base'
import LoaderView from '../components/LoaderView'
import {checkInternetConnection} from '../helpers/Helpers'

const Home = (props) => {
    const [country, setCountry] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const _onChangeText = (text) => {
        setCountry(text)
    }

    const submitTapped = async () => {
        Keyboard.dismiss()
        let connection = await checkInternetConnection()
        if (!connection) {
            Alert.alert("Please check your internet connection.")
            return
        }
        setIsLoading(true)
        fetch(`https://restcountries.eu/rest/v2/name/${country}`)
            .then((res) => res.json())
            .then((response) => {
                console.log("===country==", response)
                setIsLoading(false)
                setCountry("")
                if (response.length > 0) {
                    props.navigation.navigate("Country Details", {
                        countryData: response[0]
                    })
                } else {
                    Alert.alert("Please eneter valid country name.")
                }
            })
            .catch((error) => {
                setIsLoading(false)
                Alert.alert("Please eneter valid country name.")
            })
    }

    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder='Enter country name'
                value={country}
                onChangeText={(text => _onChangeText(text))}
            />
            <Button
                style={styles.btnSubmit}
                disabled={!country || isLoading}
                onPress={submitTapped}
            >
                <Text>Submit</Text>
            </Button>
            {
                isLoading && (
                    <LoaderView />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        marginTop: 25,
        marginHorizontal: 16,
        borderWidth: 0.6,
        borderColor: '#767676',
        height: 50,
        padding: 8,
        borderRadius: 8
    },
    btnSubmit: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 25,
        width: '40%'
    }
})

export default Home