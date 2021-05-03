

import React, {useEffect} from 'react';
import {StyleSheet, View, Animated, Dimensions} from 'react-native';

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
