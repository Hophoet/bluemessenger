import React from 'react';
import {Text, TextInput, ScrollView, Dimensions, View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import ContactsBox from '../../components/ContactsBox';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	navigation:any
}
type State = {
	data:any,
}
export default class Contacts extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
			contacts:require('../../data/contacts.json'),
			pickedUsers: this.props.route.params.pickedUsers,
			paymentModalIsVisible:true
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
		  title:'Mes contacts',
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


	_navigateTo = (screen) => {
		this.props.navigation.navigate(screen,{});
	}

	
	navigate = () => {
		this.props.navigation.navigate(
			'ParameterTontine',
			{pickedUsers:this.state.pickedUsers}
		);
	}



	render(){
		return (
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.row1}>
						<View style={styles.textInputContainer}>
							<TextInput 
								style={styles.textInput}
								placeholder='Rechercher' />	
							<Icon name='search' size={30} color='#1597bb'/>
						</View>
					</View>
					<View style={styles.row2}>
						<ContactsBox 
							title='Confidents'
							contacts={this.state.contacts}/>	
						<ContactsBox
							title='Autres contacts'
							contacts={this.state.contacts}/>	
					</View>
				</ScrollView>
				<TouchableOpacity 
					onPress={()=>this._navigateTo('AuthNav')}
					style={styles.logoutButton}>
					<Text style={styles.logoutButtonLabel}>Déconnexion</Text>
				</TouchableOpacity>
			</View>
		)
	}
}


const {width, height} = Dimensions.get('window');
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
	row1:{
		//backgroundColor:'red',
		padding:20,
	},
	textInputContainer:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		paddingHorizontal:20,
		paddingVertical:5,
		borderWidth:1,
		borderColor:'#1597bb',
	},
	textInput:{
		flex:1,
		fontSize:17,
	},
	logoutButton:{
        backgroundColor: '#1597bb',
		justifyContent:'center',
		alignItems:'center',
		paddingVertical:15,
	},
	logoutButtonLabel:{
		color:'white',
		fontSize:20,
	}

})
