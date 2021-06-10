
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	navigateTo?:any,
	screen:any,
}

const  MainHeader = (props:Props) =>  {

		useEffect( () => {

		})

		return (
			<View 
				style={styles.container}>
					<ImageBackground
						style={styles.imageBackground} 
						source={require('../assets/b.jpg')}>
						<View style={styles.contentContainer}>
							<View style={styles.column1}>
								<Icon name='checkmark-done-circle' color='white' size={50}/>
								<TouchableOpacity >
									<Icon name='camera' color='white' size={30}/>
								</TouchableOpacity>
							</View>
							<View style={styles.column2}>
								<Text style={styles.title}>{props.screen.label}</Text>	
							</View>
							<View style={styles.column3}>
								<TouchableOpacity >
									<Icon name='search' color='white' size={35}/>
								</TouchableOpacity>
								<TouchableOpacity 
									onPress={()=>{
										props.navigateTo('ProfileNav');
									}}	
								>
									<Icon name='ellipsis-vertical' size={35} color='white'/>
								</TouchableOpacity>
							</View>
						</View>

					</ImageBackground>
			</View>
		)
}

export default MainHeader;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		//backgroundColor:'red',
		height:width/4,
	},
	imageBackground:{
		flex:1,
	},
	contentContainer:{
		flex:1,
		flexDirection:'row',
        backgroundColor: '#159b',
	},
	column1:{
		//backgroundColor:'red',
		//flex:1,
		justifyContent:'space-around',
		alignItems:'center',
	},
	column2:{
		//backgroundColor:'aqua',
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	column3:{
		//backgroundColor:'blue',
		//flex:1,
		flexDirection:'row',
		justifyContent:'space-around',
		alignItems:'center',
	},
	title:{
		fontSize:30,
		color:'white',
		opacity:.5,
	}
	

})
