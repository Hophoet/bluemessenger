

import React from 'react';
import {TextInput, Text, ImageBackground, Image, Dimensions, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	navigation:any,
}

type State = {
	isCamera:boolean
}

export default class AddMediaStory extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
			isCamera:true
		}
	}

	toggleMedia = () => {
		this.setState({isCamera:!this.state.isCamera});
	}

	_customNav = () => {
		this.props.navigation.setOptions({
		  headerRight: () => (
			<View style={styles.headerRightContainer}>
				<TouchableOpacity style={styles.headerButton}>
					<Icon name='flash' size={25} color='white'/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.headerButton}>
					<Icon name='ellipsis-vertical' size={25} color='white'/>
				</TouchableOpacity>
			</View>
		  ),
		  title:'',
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



	render(){
		return (
			<View style={styles.container}>
				<ImageBackground 
					source={require('../../assets/login-bg.jpg')}
					style={styles.imageContainer}>
					
					<View style={styles.footer}>	
						<View style={styles.column1}>	
							<Image 
								style={styles.image}
								source={require('../../assets/login-bg.jpg')}
							/>
						</View>
						<View style={styles.column2}>	
							<TouchableOpacity 
								onPress={this.toggleMedia}
								style={styles.cameraButon}>
								<Icon 	
									name={(this.state.isCamera)?'camera':'videocam'} 
									size={40} color='white'/>
							</TouchableOpacity >
							<TouchableOpacity style={styles.activeCameraButton}>
								<Icon 
									name={(!this.state.isCamera)?'camera':'videocam'} 
									size={40} color='white'/>
							</TouchableOpacity>
						</View>
						<View style={styles.column3}>	
						</View>
					</View>
						
				</ImageBackground>
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
		flexDirection:'row',
	},
	footer:{
		//backgroundColor:'red',
		alignSelf:'flex-end',
		flexDirection:'row',
		marginBottom:5,
	},
	column1:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	column2:{
		justifyContent:'center',
		alignItems:'center',
		flex:1,
	},
	column3:{
		flex:1,
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
	activeCameraButton:{
		padding:25,
		backgroundColor:'#1597bb',
		borderRadius:100,
	},
	image:{
		width:width/6,
		height:width/4,
		borderRadius:5,
		borderColor:'white',
		borderWidth:2,
	}
})

