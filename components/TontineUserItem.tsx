
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
}

const  StoryItem = (props:Props) =>  {
		const [picked, pick] = useState(false);

		useEffect( () => {
		})
		

		return (
			<TouchableOpacity 
				onPress={() =>pick(!picked)}
				style={styles.container}>
				<View style={styles.column1}>
					<View style={styles.statusDot}/>
					<Image style={styles.image} source={require('../assets/user.jpg')}/>
				</View>
				<View style={styles.column2}>
					<Text style={styles.username}>{props.story.user}</Text>
					<Text >Description</Text>
				</View>
				<View style={styles.column3}>
					<TouchableOpacity style={(picked)?styles.pickButton:{}}>
						<Icon name='checkmark' color='white' size={20}/>
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
		width:width/40,
		height:width/40,
		borderRadius:90,
		margin:3
	},
	image:{
		width:width/5,
		height:width/5,
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
		justifyContent:'center',
		alignItems:'center',
		flex:1,
	},
	username:{
		fontSize:20,
		fontWeight:'bold'
	},
	pickButton:{
        backgroundColor: '#1597bb',
		padding:5,
		borderRadius:90,
		justifyContent:'center',
		alignItems:'center',
	}

})
