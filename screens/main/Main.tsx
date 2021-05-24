import React from 'react';
import {Text, TextInput, Dimensions, View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import MainHeader from '../../components/MainHeader';
import Icon from "react-native-vector-icons/Ionicons";

import {Chat, Story} from '../../navigations/Main';

type Props = {
	navigation:any
}
type State = {
	data:any,
}
export default class TontineOverview extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
			data:require('../../data/tontines.json'),
			screens:[
				{ id:2, icon:'chatbox', label:'Chat'},
				{ id:3, icon:'camera', label:'Stories'},
				{ id:4, icon:'call', label:'Appels'},
				{ id:5, icon:'cash', label:'Tontine'},
				{ id:6, icon:'card', label:'Cartes'},

			],
			selectedScreen:{ id:2, icon:'chatbox', label:'Chat'}

		}
	}

	componentDidMount() {
	}


	
	navigate = () => {
	}

	selectScreen = (selectedScreen) => {
		this.setState({selectedScreen});
	}




	render(){
		return (
			<View style={styles.container}>
				<MainHeader screen={this.state.selectedScreen}/>
				<View style={styles.row1}>
					{this.state.screens.map(screen => {
						let isSelected = screen.id == this.state.selectedScreen.id;
						return(
							<TouchableOpacity 
								onPress={()=>this.selectScreen(screen)}
								style={[styles.actionButton,
										(isSelected)
										?{backgroundColor:'#1597bb'}
										:{}
										]}>
								<View style={styles.notificationDot}>
									<Text style={styles.notificationNumber}>3</Text>
								</View>
								<View style={styles.iconContainer}>
									<Icon 
										name={screen.icon} 
										size={25} 
										color={(isSelected)?'white':'#1597bb'} />
									<Text 
										style={[
											styles.actionButtonLabel,
											(isSelected)
											?{'color':'white'}
											:{'color':'gray'}
										]}>
									{screen.label}</Text>
								</View>
							</TouchableOpacity>
							)
					})
					}

				</View>
			</View>
		)
	}
}


const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		backgroundColor:'red',
	},
	row1:{
		//backgroundColor:'red',
		alignItems:'flex-end',
		justifyContent:'flex-end',
		flexDirection:'row',
		top:-20,
	},
	notificationDot:{
		width:width/40,
		height:width/40,
		backgroundColor:'red',
		alignSelf:'flex-end',
		justifyContent:'center',
		alignItems:'center',
		borderRadius:50,
		padding:3,
		bottom:5,
		left:5,
		
	},
	iconContainer:{
		paddingHorizontal:5,
		alignItems:'center',
		justifyContent:'center',
	},
	notificationNumber:{
		fontSize:8,
		color:'white',
	},
	actionButton:{
		backgroundColor:'white',
		alignItems:'center',
		minWidth:width/6.5,
		justifyContent:'center',
		borderRadius:5,
		borderWidth:2,
		borderColor:'white',
       //backgroundColor: '#1597bb',
		marginHorizontal:5,
		elevation:20,
	},
	actionButtonLabel:{
		fontSize:10,
	},
	row2:{
		backgroundColor:'red',
		flex:1,
	}

})
