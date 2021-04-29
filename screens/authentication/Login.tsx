import React from 'react';
import {Text, View, TextInput, ImageBackground, TouchableOpacity, StyleSheet} from 'react-native';
import PickerModal from '../../components/modals/PickerModal';
import Icon from "react-native-vector-icons/Ionicons";

type LoginProps = {

}
type LoginState = {
	countries:any[],
	phoneNumberCodes:any[],
	
}

export default class Login extends React.Component<LoginProps, LoginState>{
	constructor(props:LoginProps){
		super(props);
		this.state = {
			countries:require('../../data/countries.json'),
			phoneNumberCodes:require('../../data/phoneNumberCodes.json')
		}
	}

	render(){
	
		return (
			<View style={styles.container}>
				<ImageBackground 
					style={styles.containerImage}
					source={require('../../assets/login-bg.jpg')}>
					<View style={styles.header}>
						<Text style={[styles.welcomeLabel, styles.label]}>WELCOME</Text>
						<Icon name='chatbubble-ellipses-outline' size={70} color='white'/>
						<Text style={[styles.appNameLabel, styles.label]}>BLUE MESSENGER</Text>
					</View>
					<View style={styles.form}>
						<PickerModal 
							defaultLabel='Choose your country' 
							data={this.state.countries}/>
						<View style={styles.phoneNumberContainer}>
							<PickerModal 
								style={{paddingHorizontal:30}}
								defaultLabel='+000' 
								data={this.state.phoneNumberCodes}/>
							<TextInput
								placeholder='phone number'
								placeholderTextColor='white'
								style={styles.phoneNumberTextInput}
							/>
						</View>
						<TouchableOpacity 
							style={styles.nextButton}
							activeOpacity={.5}
						>
							<Text style={styles.nextLabel}>Suivant</Text>
						</TouchableOpacity>
					</View>
	
				</ImageBackground>
			</View>

		)
	}
	

}

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	containerImage:{
		flex:1,
	},
	header:{
		//backgroundColor:'red',
		flex:1,
		justifyContent:'space-between',
		alignItems:'center',
	},
	form:{
		//backgroundColor:'blue',
		flex:3,
		paddingHorizontal:40,
		marginTop:90
	},
	label:{
		color:'white',
		fontSize:30
	},
	welcomeLabel:{
		opacity:.5
	},
	phoneNumberContainer:{
		//backgroundColor:'red',
		flexDirection:'row',
		marginBottom:20,
		marginTop:20
	},
	phoneNumberTextInput:{
		flex:1,
		borderBottomWidth:2,
		borderBottomColor:'white',
		height:50,
		marginLeft:50,
		color:'white',
		fontSize:20

	},
	nextButton:{
		backgroundColor:'#1597bb',
		paddingVertical:15,
		paddingHorizontal:90,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:40
	},
	nextLabel:{
		color:'white',
		fontSize:20
	}
	

})

