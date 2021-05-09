import React from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback, Animated} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Ionicons";

export default class FloatButton extends React.Component {

    press = () => {
		if(this.props.navigate){
			this.props.navigate();
		}
    }
    render(){
        
        return (
            <View style={[styles.container]}>
                <TouchableWithoutFeedback onPress={this.press}>
                    <View style={[styles.button,{backgroundColor:'#1597bb'}]}>
                        <Icon size={40} name={(this.props.icon)?this.props.icon:'call'} color={'white'}/>
                    </View>
                </TouchableWithoutFeedback>
            </View>
          
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
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
})
