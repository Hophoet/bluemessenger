
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
}

const  ArchiveItem = (props:Props) =>  {

		useEffect( () => {
		})

		return (
			<View style={styles.container}>
				<View style={styles.row1}>
					<Text style={styles.title}>{props.title}</Text>
				</View>
				<View style={styles.row2}>
					{ props.contacts.map(contact =>(
						<TouchableOpacity 
							activeOpacity={.4}
							key={contact.id}
							style={styles.row2Content}>
							<View style={styles.contactContainer}>
								<Image 
									style={styles.image} 
									source={require('../assets/b.jpg')}/>
								<Text style={styles.userName}>{contact.name}</Text>
					
							</View>
						</TouchableOpacity>
					))
					}
				</View>
			</View>


		)
}

export default ArchiveItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
	},
	contactContainer:{
		width:width/3.6,
		height:width/3.6,
		backgroundColor:'#39f2',
		justifyContent:'center',
		alignItems:'center',
	},
	image:{
		width:width/8,
		height:width/8,
		borderRadius:100,
	},
	row1:{
		//backgroundColor:'red',
		padding:10,
	},
	title:{
		fontSize:25,
		fontWeight:'bold',
		color:'#1597bb',

	},
	row2:{
		flexDirection:'row',
		flexWrap:'wrap',
		justifyContent:'center',
	},
	row2Content:{
		margin:width/40,

	},
	userName:{
		fontSize:20,
		fontWeight:'bold',
		color:'#1597bb',
	}

})
