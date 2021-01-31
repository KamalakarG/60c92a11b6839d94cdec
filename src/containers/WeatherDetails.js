import React from 'react'
import {Image} from 'react-native'
import {Container, Content, ListItem, Body, Text} from 'native-base'
import ListItemComponent from '../components/ListItemComponent'

const WeatherDetails = (props) => {
    const {weatherData} = props.route.params
    const {temperature, precip, wind_speed, weather_icons} = weatherData
  
    return (
        <Container>
            <Content>
                <ListItem itemDivider/>
                <ListItemComponent title={'Temperature: '} subTitle={temperature} />
                <ListItemComponent title={'Wind Speed: '} subTitle={wind_speed} />
                <ListItemComponent title={'Precip: '} subTitle={precip} />
                <ListItem itemDivider/>
                <ListItem>
                    <Body>
                        <Text style={{marginBottom: 16}}>Weather Icons</Text>
                        {
                            weather_icons.map((iconUrl) => {
                                return (
                                    <Image 
                                        source={{uri: iconUrl}}
                                        style={{width: 50, height: 50, marginHorizontal: 12}}
                                        key={iconUrl}
                                    />
                                )
                            })
                        }
                    </Body>
                </ListItem>
                <ListItem itemDivider/>
            </Content>
        </Container>
    )
}

export default WeatherDetails