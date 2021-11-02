import React from 'react'
import { Pressable, Text, View } from 'react-native'
import Styles from './styles'

const StyleButton=(props)=>{
    // const type=props.type;
    // const content = props.content;
    // const onPress=props.onPress;

        const {type, content,onPress}=props


    const backgroundColor=type === "primary" ? '#171A20CC' : '#FFFFFFA6';
    const textColor=type === "primary" ? '#FFFFFFA6' : '#171A20CC';
    return (
        <View style={Styles.container}>
            <Pressable
                style={[Styles.button,{backgroundColor:backgroundColor}]}
                onPress={()=>onPress()}
                >
                    <Text style={[Styles.text,{color:textColor}]}>{content}</Text>

            </Pressable>
        </View>
    )
}

export default StyleButton
