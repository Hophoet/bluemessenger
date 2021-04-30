
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, TextInput, Button, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
}

const  ConversationItem = (props:Props) =>  {
		const [modalVisible, setModalVisible] = useState(false);

		useEffect( () => {
		})

		return (
			<TouchableOpacity 
				onPress={() => props.navigate(props.conversation)}
				style={styles.container}>
				<View style={styles.column1}>
					<View style={styles.statusDot}/>
					<Image style={styles.image} source={require('../assets/user.jpg')}/>
				</View>
				<View style={styles.column2}>
					<Text style={styles.phoneNumber}>{props.conversation.userPhoneNumber}</Text>	
					<Text numberOfLines={1} style={styles.message}>{props.conversation.messages[props.conversation.messages.length-1].text}</Text>	
				</View>
				<View style={styles.column3}>
					<Icon name='ellipsis-vertical' color='gray' size={20}/>
					<Text style={styles.data}>00:44</Text>	
				</View>
			</TouchableOpacity>


		)
}

export default ConversationItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flexDirection:'row'	
	},
	column1:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	statusDot:{
		backgroundColor:'red',
		width:width/30,
		height:width/30,
		borderRadius:90,
		margin:3
	},
	image:{
		width:width/5,
		height:width/5,
		borderRadius:90
	},
	column2:{
		flex:1,
		justifyContent:'center',
		paddingHorizontal:10,
	},
	column3:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	phoneNumber:{
		fontSize:20,
		fontWeight:'bold'
	}

})
