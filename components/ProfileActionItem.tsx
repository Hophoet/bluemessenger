
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
}

const  ProfileActionItem = (props:Props) =>  {

		useEffect( () => {
		})

		
		return (
			<TouchableOpacity 
				onPress={() => {
					if(props.item.name == 'Reglages'){
						props.navigate('Settings');
					}	
				}}
				style={styles.container}>
				<View style={styles.column1}>
					<Text style={styles.actionName}>{props.item.name}</Text>
				</View>
				<View style={styles.column2}>
					{ props.item.number &&
					<View style={styles.numberContainer}>
						<Text style={styles.number}>{props.item.number}</Text>
					</View>
					}
				</View>
			</TouchableOpacity>


		)
}

export default ProfileActionItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		//backgroundColor:'red',
		justifyContent:'space-between',
		flex:1,
		height:width/6,
	},
	column1:{
		flexDirection:'row',
		alignItems:'center',
		flex:1,
		//backgroundColor:'green',
		paddingLeft:20,
	},
	column2:{
		flex:1,
		justifyContent:'center',
		paddingHorizontal:10,
		alignItems:'center',
	},
	column3:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		flex:1,
	},
	actionName:{
		fontSize:20,
		fontWeight:'bold',
		color:'white',
	
	},
	numberContainer:{
		backgroundColor:'white',
		borderRadius:100,
		width:width/10,
		height:width/10,
		justifyContent:'center',
		alignItems:'center',
	},
	number:{
        color: '#1597bb',
		fontWeight:'bold',
		fontSize:18,
	}

})
