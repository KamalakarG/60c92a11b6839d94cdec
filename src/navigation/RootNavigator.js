import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import Home from '../containers/Home'
import CountryDetails from '../containers/CountryDetails'
import WeatherDetails from '../containers/WeatherDetails'

const RootStack = createStackNavigator()

const RootNavigator = () => {
    return(
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name='Home' component={Home} />
                <RootStack.Screen name='Country Details' component={CountryDetails} />
                <RootStack.Screen name='Weather Details' component={WeatherDetails} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator