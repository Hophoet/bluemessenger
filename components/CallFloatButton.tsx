import React from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {

}

type State = {

}

export default class FloatButton extends React.Component<Props, State> {
    open:any;
	constructor(props:Props){
		super(props);
	}

    animation = new Animated.Value(0)
    
    toggleMenu = () => {
        const toValue = this.open ? 0 : 1
        Animated.spring(this.animation, {
            toValue,
            friction:5,
            useNativeDriver:false,
        }).start()

        this.open = !this.open
    }
    render(){
        const pinStyle = {
            transform: [
                {scale:this.animation},
                {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -20]
                    })
                }
            ]
        }
        const rotation = {
            transform:[
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '45deg']
                    })
                }
            ]
        }

        
        return (
            <View style={[styles.container]}>
                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, rotation, {backgroundColor:'#1597bb'}]}>
                        <Icon size={40} name='call' color={'white'}/>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
          
        )
    }
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:32,
        right:32,
		justifyContent:'flex-end',
		alignItems:'flex-end',
    
       
       
    },
    button:{
        width:70,
        height:70,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        //position:'absolute',
        elevation:10,
        //borderWidth:2,
        //borderColor:'white',
      
        
      
    },
    plus:{
        fontSize:30,
        color:'white',
    },
    second:{
        width:60,
        height:60,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
		flexDirection:'row',
		//backgroundColor:'#39f2',
		elevation:10,
		backgroundColor:'#1597bb',
		marginTop:5

    },
	buttonContainer:{
	}
})
