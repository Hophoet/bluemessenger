import React, {useState, useEffect} from 'react';
import {StyleSheet, ImageBackground, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
}

const  StoryDetailItem = (props:Props) =>  {
		const [modalVisible, setModalVisible] = useState(false);

		useEffect( () => {
		})

		return (
			<ImageBackground 
						style={styles.image} 
						source={require('../assets/login-bg.jpg')}>
						<View style={styles.statusHeader}>
							<View style={styles.infosContainer}>
								<Icon name='eye' color='white' size={25}/>
								<Text style={styles.info}>Views</Text>
							</View>
							<View style={styles.infosContainer}>
								<Icon name='chatbox' color='white' size={25}/>
								<Text style={styles.info}>Views</Text>
							</View>
						</View>
						<View style={styles.statusContent}>
							<Text style={styles.statusText}>On sait depuis longtemps que travailler avec du tet lisible</Text>
						</View>
						<View style={styles.statusFooter}>
							<View style={styles.statusIconsContainer}>
								<Text style={styles.statusIcon}>☺️</Text>
								<Text style={styles.statusIcon}>😆</Text>
								<Text style={styles.statusIcon}>😍</Text>
							</View>
							<View style={styles.statusActionsContainer}>
								<TouchableOpacity style={styles.statusActionContainer}>
									<View style={styles.statusActionIcon}>
										<Icon name='chatbox' color='gray' size={20}/>
									</View>
									<Text style={styles.statusActionText}>Repondre</Text>
								</TouchableOpacity>
								<TouchableOpacity style={styles.statusActionContainer}>
									<View style={styles.statusActionIcon}>
										<Icon name='chatbox' color='gray' size={20}/>
									</View>
									<Text style={styles.statusActionText}>Commenter</Text>
								</TouchableOpacity>
									
							</View>
						</View>
					</ImageBackground>


		)
}

export default StoryDetailItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	image:{
		width:width,
		height:height,
	},
	scrollViewContainer:{
		flex:1,
	},
	messagesContainer:{
		flex:1,
	},
	fButton:{
		backgroundColor:'white',
		padding:5,
		borderRadius:90,
		alignSelf:'center',
		justifyContent:'center',
		alignItems:'center',
		marginHorizontal:5,
	},
	sButton:{
		padding:5,
		alignSelf:'center',
		justifyContent:'center',
		alignItems:'center',
		marginHorizontal:5,
	},
	headerRightContainer:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	headerButton:{
		//backgroundColor:'red',
		padding:5,
		marginRight:5,
	},
	statusHeader:{ 
		//backgroundColor:'red',
		flex:1,
		paddingTop:10
	},
	statusContent:{ 
		//backgroundColor:'blue',
		flex:4,
		justifyContent:'center',
		alignItems:'center'
	},
	statusText:{
		color:'white',
		textAlign:'center',
		fontSize:30,
		opacity:.7,
	},
	statusFooter:{
		//backgroundColor:'yellow',
		flex:3,
	},
	infosContainer:{
		//backgroundColor:'green',
		flexDirection:'row',
		alignSelf:'flex-end',
		paddingRight:50,
		opacity:.7
	},
	info:{
		color:'white',
		paddingHorizontal:5
		
	},
	statusIconsContainer:{
		flexDirection:'row',
		alignSelf:'center',
	},
	statusIcon:{
		fontSize:40,
	},
	statusActionsContainer:{
		//backgroundColor:'red',
		flexDirection:'row',
		justifyContent:'space-between',
		paddingHorizontal:20,
		opacity:.8,
	},
	statusActionContainer:{
		//backgroundColor:'green',
		flexDirection:'row',
		alignItems:'center',
	},
	statusActionText:{
		color:'white',
		padding:5,
	},
	statusActionIcon:{
		backgroundColor:'white',
		borderRadius:90,
		padding:5,
	},

})
