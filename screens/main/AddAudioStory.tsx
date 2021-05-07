

import React from 'react';
import {TextInput, Text, Dimensions, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	navigation:any,
}

type State = {
	micClicked:boolean
}

export default class AddAudioStory extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
			micClicked:false
		}
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
		  title:'Marina',
		  headerTintColor:'white',
          headerStyle: {
            backgroundColor: '#1597bb',
          },
		  headerLeftStyle:{color:'white'},

		
		});

	}

	componentDidMount(){
		this._customNav();
	}

	clickMic = () => {
		this.setState({micClicked:!this.state.micClicked});
	}



	render(){
		return (
			<View style={styles.container}>
				<View style={styles.content}>
					<View style={styles.row1}>
						<TouchableOpacity 
							onPress={this.clickMic}
							style={styles.micButton}>
							<Icon name='mic' size={50} color='red' />
						</TouchableOpacity>
						<Text style={styles.recordMoment} >2 : 45 Sec </Text>
					 	{ this.state.micClicked &&	<Icon name='pulse' style={styles.pulse} size={60} color='white' />
						}
					</View>
					{ this.state.micClicked &&
					<View style={styles.row2}>
						<TouchableOpacity style={[styles.actionButton, {backgroundColor:'green'}]}>
							<Icon name='checkmark-outline' size={40} color='white' />
						</TouchableOpacity>	
						<TouchableOpacity style={styles.actionButton}>
							<Icon name='close' size={40} color='white' />
						</TouchableOpacity>	
					</View>
					}
				</View>
			</View>
		)
	}
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'red',
		justifyContent:'center',
		alignItems:'center',
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
	content:{
		//backgroundColor:'blue',
	},
	micButton:{
		padding:20,
		backgroundColor:'white',
		borderRadius:100,
		elevation:10,
	},
	row1:{
		alignItems:'center',
	},
	recordMoment:{
		color:'white',
		marginTop:10,
	},
	row2:{
		flexDirection:'row',
	},
	actionButton:{
		padding:10,
		backgroundColor:'red',
		borderRadius:90,
		marginHorizontal:5,
		elevation:5,
	},
	pulse:{
		margin:30,
	}
})

