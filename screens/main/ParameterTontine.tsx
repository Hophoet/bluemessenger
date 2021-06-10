import React from 'react';
import {Text, TextInput, View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import TontineUserItem from '../../components/TontineUserItem';
import TontineFloatButton from '../../components/TontineFloatButton';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	navigation:any,
	route:any
}
type State = {
	data:any,
	pickedUsers:any,
	usersOrder:any,
	customOrderTypePicked:boolean,
}
export default class ParameterTontine extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
			data:require('../../data/stories.json'),
			pickedUsers: this.props.route.params.pickedUsers,
			usersOrder:[],
			customOrderTypePicked:true
		}
	}

	toggleOrderType = () => {
		if(this.state.customOrderTypePicked){
			console.log('moment')	
			this.setState({usersOrder:[...this.state.pickedUsers]});
		}
		else{
			this.setState({usersOrder:[]});
		}
		this.setState({customOrderTypePicked:!this.state.customOrderTypePicked});
	}

	navigate = () => {
		this.props.navigation.navigate(
			'TontineOverview',
			{pickedUsers:this.state.usersOrder}
		);
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
		  title:'Nouvelle Tontine',
		  headerTintColor:'white',
          headerStyle: {
            backgroundColor: '#1597bb',
          },
		  headerLeftStyle:{color:'white'},

		
		});

	}

	componentDidMount() {
		this._customNav();
	}


	_navigateTo = (screen:string) => {
		this.props.navigation.navigate(screen,{});
	}


	toogleUserInTheOrderList = (user:any) => {
		let usersOrder = [...this.state.usersOrder];
		let userExists = usersOrder.find(item => item.id == user.id);
		if(userExists){
			usersOrder = usersOrder.filter(item => item.id != user.id);
		}
		else{
			usersOrder.push(user);
		}
		this.setState({usersOrder:usersOrder});
		console.log(usersOrder);
	}
	


	render(){
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<TextInput 
						placeholder='Tonine entre colleges'
						style={styles.textInput}

					/>
					<TextInput 
						placeholder='Tonine entre colleges'
						style={styles.textInput}

					/>
					<Text style={styles.textInputText}>
						Veuilez donner un titre à votre tontine en reférence par example à la cause 
					</Text>

				</View>
				<View style={styles.content}>
					<View style={styles.orderTypeToggleButtonsContainer}>
						<TouchableOpacity 
							onPress={this.toggleOrderType}
							style={[ (this.state.customOrderTypePicked)
									?{...styles.orderTypePickedButton,left:20} 
									:styles.orderTypeNotPickedButton
							]}

						>
							<Text style={styles.buttonLabel}>Ordre Personalisé</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={this.toggleOrderType}
							style={[ (!this.state.customOrderTypePicked)
									?{...styles.orderTypePickedButton,right:20 }
									:styles.orderTypeNotPickedButton
							]}
						>
							<Text style={styles.buttonLabel}>Ordre Aléatoire</Text>
						</TouchableOpacity>

					
					</View>
					<FlatList
						data={this.state.pickedUsers}
						ItemSeparatorComponent= {
							() =>	<View style={styles.itemsSeparator} />
						}
						renderItem={({index, item}) =>( 
							<TontineUserItem 
								pickable={false}  
								story={item} 
								step={'parameter'} 
								toogleUserInTheOrderList={this.toogleUserInTheOrderList}
								usersOrder={
									(this.state.customOrderTypePicked) 
									?this.state.usersOrder
									:this.state.pickedUsers
								}	
								customOrderTypePicked={this.state.customOrderTypePicked}
								/>) }
						keyExtractor={(item) => item.id}
					/>
				</View>
				{ (this.state.usersOrder.length == this.state.pickedUsers.length)?
				(<TontineFloatButton
					navigate={this.navigate}
					icon='checkmark'/>
				)
				:null
				}
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	itemsSeparator:{
		height:1,
		backgroundColor:'gray',
		marginVertical:5,
		opacity:.5,
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
	header:{
		backgroundColor:'#39f2',
		flex:1,
		justifyContent:'center',
		paddingHorizontal:20,
	},
	content:{
		flex:2,
	},
	textInput:{
		backgroundColor:'white',
		padding:15,
		marginTop:10
	},
	textInputText:{
		paddingTop:10,
		color:'#1597bb',
	},
	orderTypeToggleButtonsContainer:{
		//backgroundColor:'red',
		flexDirection:'row',
		paddingVertical:20,
		alignItems:'center',
		justifyContent:'center',
	},
	orderTypePickedButton:{
    	backgroundColor: '#1597bb',
		paddingVertical:7,
		paddingHorizontal:30,
		borderRadius:50,
		
	},
	orderTypeNotPickedButton:{
		backgroundColor:'#39f7',
		paddingVertical:7,
		paddingHorizontal:30,
		borderRadius:50,
	},
	buttonLabel:{
		color:'white',
		fontSize:15,
	}

})
