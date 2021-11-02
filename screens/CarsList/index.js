import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import Index from '../CarItem'
import Styles from './styles'

import cars from './cars'

const CarsList = (props) => {
    return (
        <View style={Styles.container}>
            <FlatList 
                data={cars}
                renderItem={({item})=><Index car={item}/>}
                showsVerticalScrollIndicator={false}
                snapToAlignment={"start"}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
                />
        </View>
    )
}

export default CarsList
