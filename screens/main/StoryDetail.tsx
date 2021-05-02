

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
				<View style={styles.imageContainer}>
					<Image 
						resizeMode='contain'
						style={styles.image} 
						source={require('../../assets/login-bg.jpg')}>
					</Image>
				</View>
				<View style={[styles.imageContainer, {backgroundColor:'blue'}]}>
					<Image 
						resizeMode='center'
						style={styles.image} 
						source={require('../../assets/login-bg.jpg')}>
					</Image>
				</View>
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
	imageContainer:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
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
	formContainer:{
		flexDirection:'row',
		//backgroundColor:'red',
		justifyContent:'center',
		//alignItems:'center',
		paddingVertical:10,
	},
	textInputContainer:{
		borderColor:'#1597bb',
		borderWidth:StyleSheet.hairlineWidth,
		flex:1,
		marginHorizontal:5,
		borderRadius:5,
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
	statusDot:{
		width:width/25,
		height:width/25,
		backgroundColor:'green',

}
})
