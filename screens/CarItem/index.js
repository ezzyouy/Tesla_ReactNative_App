import React from 'react';
import { View, Text, ImageBackground } from 'react-native'
import StyleButton from '../StyleButton';
import Styles from './styles';

const Index=(props)=>{

  const {name, tagline, taglineCTA, image}=props.car
    return (
        <View  key={Math.random()} style={Styles.carContaine}>
        <ImageBackground 
            source={image}
            style={Styles.image}
          />
        <View style={Styles.titles}>
          <Text style={Styles.title}>{name}</Text>
          <Text style={Styles.subTitle}>
            {tagline}&nbsp;
              <Text style={Styles.subtitleCTA}>{taglineCTA}</Text>
            </Text>
        </View>
        <View style={Styles.buttonContainer}>
        <StyleButton 
            type="primary" 
            content={"Custom Order"}
            onPress={()=>console.warn("Custom pressed")}
          />
        <StyleButton 
            type="secondary" 
            content={"Existing inventory"}
            onPress={()=>console.warn("Existing inventory pressed")}
        />
        </View>
      </View>
    )
}
export default Index;
