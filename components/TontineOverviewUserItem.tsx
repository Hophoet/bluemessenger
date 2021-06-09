
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	pickable:boolean,
	item:any,
}

const  StoryItem = (props:Props) =>  {
		const [picked, pick] = useState(false);

		useEffect( () => {
		})


		

		return (
			<View 
				style={styles.container}>
				<View style={styles.column1}>
					<Image style={styles.image} source={require('../assets/user.jpg')}/>
				</View>
				<View style={styles.column2}>
					<Text style={styles.username}>{props.item.user}</Text>
					<Text >Description</Text>
				</View>
				<View style={styles.column3}>
					{ props.item.completed &&
					<Icon style={styles.icon} name='cash' color='#1597bb' size={20}/>
					}
					<View 
						style={[ 
							styles.paymentStateContainer
						]}

					>
						<Text style={styles.paymentStateLabel}>{props.item.state}</Text>
					</View>
				</View>
			</View>


		)
}

export default StoryItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		marginLeft:5,
	},
	column1:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	statusDot:{
		backgroundColor:'red',
		width:width/40,
		height:width/40,
		borderRadius:90,
		margin:3
	},
	image:{
		width:width/5.5,
		height:width/5.5,
		borderRadius:90,
		borderWidth:3,
		borderColor:'#1597bb',
	},
	column2:{
		flex:2,
		justifyContent:'center',
		paddingHorizontal:10,
	},
	column3:{
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'flex-end',
		flex:4,
	},
	username:{
		fontSize:20,
		fontWeight:'bold'
	},
	paymentStateContainer:{
        backgroundColor: '#1597bb',
		borderRadius:90,
		justifyContent:'center',
		alignItems:'center',
		padding:5,
	},
	paymentStateLabel:{
		color:'white',
		fontSize:13,
	},
	icon:{
		paddingRight:5,
	}
})
