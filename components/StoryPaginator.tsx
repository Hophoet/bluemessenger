

import { HeaderHeightContext } from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Animated, TextInput, Button, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
    data:any,
    scrollX:any,
    style:any
}

const  StoryPaginator = (props:Props) =>  {

		useEffect( () => {
		})

		return (
            <View style={[styles.container, props.style]}>
                {
                    props.data.map((_:any, i:any) => {
                        const inputRange:any = [(i - 1) * width, i * width, (i + 1) * width];
                        const dotWidth:any = props.scrollX.interpolate({
                            inputRange,
                            outputRange: [10, 20, 10],
                            extrapolate: 'clamp',
                        })
                        return <Animated.View style={[styles.dot, {width:dotWidth}]} key={i.toString()}/>
                    })
                }
            </View>
		)
}

export default StoryPaginator;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
	},
    dot:{
        height:10,
        borderRadius:5,
        backgroundColor:'white',
        marginHorizontal:8,
        bottom:20,

    }

})
