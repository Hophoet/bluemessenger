
import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, Image, Button, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	message:any
}

const  MessageItem = (props:Props) =>  {

		useEffect( () => {
		})

		return (
			<View style={
				[styles.container, 
					(props.message.author!)
					?styles.sContainer
					:styles.rContainer]
			}>
				<Image style={styles.image} source={require('../assets/user.jpg')}/>
				<View style={
					[styles.messageContainer,
						(props.message.author!)
						?styles.sMessageContainer
						:styles.rMessageContainer

				]}>
					<Text
						style={(props.message.author!)
							?styles.sMessage
							:styles.rMessage
						}
					>{props.message.text}</Text>
				</View>
			</View>


		)
}

export default MessageItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		//backgroundColor:'red',
		maxWidth:width/1.3,
		alignItems:'flex-end',
		marginBottom:10
	},
	sContainer:{
		alignSelf:'flex-end',
		flexDirection:'row-reverse',
		justifyContent:'center',
	},
	rContainer:{
		alignSelf:'flex-start',
		flexDirection:'row',
		justifyContent:'center',
	},
	image:{
		width:width/8,
		height:width/8,
		borderRadius:90,
	},
	messageContainer:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		paddingVertical:10,
		paddingHorizontal:5,
	},
	sMessageContainer:{
		backgroundColor:'#39f2',
		borderBottomLeftRadius:20,
		borderTopLeftRadius:20,
		borderTopRightRadius:20
	},
	sMessage:{
		color:'black',
	},
	rMessageContainer:{
		backgroundColor:'#1597bb',
		borderBottomRightRadius:20,
		borderTopLeftRadius:20,
		borderTopRightRadius:20
	},
	rMessage:{
		color:'white',
	}
})
