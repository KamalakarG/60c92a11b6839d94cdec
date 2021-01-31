import React from 'react'
import {ActivityIndicator, View, StyleSheet} from 'react-native'

const LoaderView = () => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator animating={true} size='large' color='#0000ff' />
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default LoaderView