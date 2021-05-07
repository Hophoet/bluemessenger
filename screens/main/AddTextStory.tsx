

import React from 'react';
import {TextInput, Text, Dimensions, View, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	navigation:any,
}

type State = {
}

export default class StoryDetail extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
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



	render(){
		return (
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<TextInput 
						multiline={true}
						autoFocus={true}
						selectionColor='white'
						style={styles.storyTextInput}/>
				</View>
				<View style={styles.formContainer}>
					<TouchableOpacity style={styles.fButton}>
						<Icon name='chevron-down' size={25} color='#1597bb'/>
					</TouchableOpacity>
					<View style={styles.textInputContainer}>
						<TextInput 
							placeholder='Entrer votre message'
						/>
					</View>
					<TouchableOpacity style={styles.sButton}>
						<Icon name='arrow-forward' size={25} color='#1597bb'/>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flex:1,
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
	textContainer:{
		backgroundColor:'#FA26A0',
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},	
	storyTextInput:{
		fontSize:25,
		color:'white',
		flex:1,
		paddingHorizontal:10,
		textAlign:'center',
	},
	textInput:{
		//backgroundColor:'blue',
	},
	formContainer:{
		flexDirection:'row',
		backgroundColor:'white',
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
})

