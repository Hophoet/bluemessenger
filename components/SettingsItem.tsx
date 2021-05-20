
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
}

const  StoryItem = (props:Props) =>  {

		useEffect( () => {
		})

		return (
			<TouchableOpacity 
				style={styles.container}>
				<View style={styles.column1}>
					<Icon name={props.item.icon} color='#1597bb' size={20}/>
					<Text style={styles.title}>{props.item.name}</Text>
				</View>
				<View style={styles.column2}>
				</View>
				<View style={styles.column3}>
					<TouchableOpacity >
					<Text style={styles.secondText}>{props.item.second_text}</Text>
					</TouchableOpacity>
				</View>

			</TouchableOpacity>


		)
}

export default StoryItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		paddingHorizontal:20,
		paddingVertical:30,
		backgroundColor:'#39f1',
	},
	title:{
		color:'#1597bb',
		marginLeft:10,
		fontSize:15,
	},
	secondText:{
		color:'#1597bb',
		opacity:.5,
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
		justifyContent:'center',
		paddingHorizontal:10,
	},
	column3:{
		flexDirection:'row',
		justifyContent:'flex-end',
		alignItems:'center',
		flex:2,
	},
	username:{
		fontSize:20,
		fontWeight:'bold'
	},

})
