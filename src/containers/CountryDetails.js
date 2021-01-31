import React, {useState} from 'react'
import {Container, Content, ListItem, Body, Text, Button} from 'native-base'
import {SvgUri} from 'react-native-svg'
import ListItemComponent from '../components/ListItemComponent'
import LoaderView from '../components/LoaderView'
import {checkInternetConnection} from '../helpers/Helpers'

const WEATHER_API_KEY = "5fa07374af3e693cf66ae1c08c7c5f89"

const CountryDetails = (props) => {
    const {countryData} = props.route.params
    const {flag, capital, population, latlng} = countryData

    const [isLoading, setIsLoading] = useState(false)

    const getWeatherDetails = async () => {
        let connection = await checkInternetConnection()
        if (!connection) {
            Alert.alert("Please check your internet connection.")
            return
        }
        setIsLoading(true)
        fetch(`http://api.weatherstack.com/current?access_key=${WEATHER_API_KEY}&query=${capital}`)
            .then((res) => res.json())
            .then((response) => {
                setIsLoading(false)
                props.navigation.navigate('Weather Details',{
                    weatherData: response.current
                })
            })
            .catch((error) => {
                setIsLoading(false)
                Alert.alert("Please eneter valid country name.")
            })
    }

    return(
        <Container>
            <Content>
            {
                isLoading && (
                    <LoaderView />
                )
            }
                <ListItem itemDivider/>
                <ListItem>
                    <Body>
                        <SvgUri uri={flag} width='95%' height={200} style={{alignSelf: 'center'}} />
                    </Body>
                </ListItem>
                <ListItem itemDivider/>
                <ListItemComponent title={'Capital: '} subTitle={capital} />
                <ListItemComponent title={'Population: '} subTitle={population} />
                <ListItemComponent title={'Latitude: '} subTitle={latlng[0]} />
                <ListItemComponent title={'Longitude: '} subTitle={latlng[1]} />
                <ListItem itemDivider/>
                <ListItem>
                    <Body>
                        <Button
                            disabled={isLoading}
                            onPress={getWeatherDetails}
                            style={{alignSelf: 'center', justifyContent: 'center'}}
                        >
                            <Text>Get Weather Details</Text>
                        </Button>
                    </Body>
                </ListItem>
                <ListItem itemDivider/>
            </Content>
        </Container>
    )
}

export default CountryDetails