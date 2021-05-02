

import React from 'react';
import {Text, Image,ImageBackground, ScrollView, Button, Dimensions, View, TextInput, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Messages from '../../components/Messages';

type Props = {
	navigation:any
}

type State = {
}

export default class StoryDetail extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this._customNav();
	}

	_customNav = () => {
		this.props.navigation.setOptions({
		  headerRight: () => (
			<View style={styles.headerRightContainer}>
				<TouchableOpacity style={styles.headerButton}>
					<Icon name='search' size={25} color='white'/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.headerButton}>
					<Icon name='ellipsis-vertical' size={25} color='white'/>
				</TouchableOpacity>
			</View>
		  ),
		  title:this.props.route.params.story.user ,//this.props.route.params.story.userPhoneNumber,
		  headerTintColor:'white',
          headerStyle: {
            backgroundColor: '#1597bb',
          },
		  headerLeftStyle:{color:'white'},

		
		});

	}

	
	
	componentDidMount(){
	}



	render(){
		let story = this.props.route.params.story;
		return (
			<View style={styles.container}>
				<ScrollView 
					ref='scroll'
					horizontal={true}
					style={styles.scrollViewContainer}>
					<ImageBackground 
						style={styles.image} 
						source={require('../../assets/login-bg.jpg')}>
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
							<View style={styles.statusScrollIndicatorContainer}>
								<Icon name='ellipsis-horizontal-circle-outline' color='white' size={40}/>
								<Icon name='ellipsis-horizontal-circle-outline' color='white' size={40}/>
								<Icon name='ellipsis-horizontal-circle-outline' color='white' size={40}/>
							</View>
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
					<ImageBackground 
						style={styles.image} 
						source={require('../../assets/login-bg.jpg')}>
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
							<View style={styles.statusScrollIndicatorContainer}>
								<Icon name='ellipsis-horizontal-circle-outline' color='white' size={40}/>
								<Icon name='ellipsis-horizontal-circle-outline' color='white' size={40}/>
								<Icon name='ellipsis-horizontal-circle-outline' color='white' size={40}/>
							</View>
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
				</ScrollView>
			</View>
		)
	}
}

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
	statusScrollIndicatorContainer:{
		//backgroundColor:'red',
		flexDirection:'row',
		opacity:.7,
		alignSelf:'center',
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
