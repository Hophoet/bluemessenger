
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	story:any
}

const  StoryItem = (props:Props) =>  {

		useEffect( () => {
		})

		return (
			<TouchableOpacity 
				style={styles.container}>
				<View style={styles.column1}>
					<View style={styles.statusDot}/>
					<Image style={styles.image} source={require('../assets/user.jpg')}/>
				</View>
				<View style={styles.column2}>
					<Text style={styles.username}>{props.story.user}</Text>
					<Text >I y a 2h</Text>
				</View>
				<View style={styles.column3}>
					<TouchableOpacity >
						<Icon name='ellipsis-vertical' color='gray' size={20}/>
					</TouchableOpacity>
				</View>

			</TouchableOpacity>


		)
}

export default StoryItem;

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
		flex:2,
		justifyContent:'center',
		paddingHorizontal:10,
	},
	column3:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		flex:1,
	},
	username:{
		fontSize:20,
		fontWeight:'bold'
	},

})
