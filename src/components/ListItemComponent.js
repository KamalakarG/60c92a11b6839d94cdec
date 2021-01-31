import React from 'react'
import {StyleSheet} from 'react-native'
import {ListItem, Body, Text,} from 'native-base'

const ListItemComponent = (props) => {
    const {title, subTitle} = props

    return(
        <ListItem>
            <Body>
                <Text style={styles.titleTxt}>
                    {title}
                    <Text style={styles.subTitleTxt}>{subTitle}</Text>
                </Text>
            </Body>
        </ListItem>
    )
}

const styles = StyleSheet.create({
    titleTxt: {
        fontSize: 16, 
        fontWeight: 'bold'
    },
    subTitleTxt: {
        fontSize: 16, 
        fontWeight: '400'
    },
})

export default ListItemComponent