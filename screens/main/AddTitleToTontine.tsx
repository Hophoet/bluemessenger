import React from 'react';
import {Text, TextInput, View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import TontineUserItem from '../../components/TontineUserItem';
import TontineFloatButton from '../../components/TontineFloatButton';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	navigation:any,
	route:any,
}
type State = {
	data:any,
	pickedUsers:any[]
}
export default class AddTitleToTontine extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
			data:require('../../data/stories.json'),
			pickedUsers: this.props.route.params.pickedUsers
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
		console.log('picked user', this.state.pickedUsers);
	}


	_navigateTo = (screen:string) => {
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
				<View style={styles.header}>
					<TextInput 
						placeholder='Tonine entre colleges'
						style={styles.textInput}

					/>
					<Text style={styles.textInputText}>
						Veuilez donner un titre à votre tontine en reférence par example à la cause 
					</Text>

				</View>
				<View style={styles.content}>
					<Text style={styles.listHeaderText}>Participants: {this.state.pickedUsers.length}</Text>
					<FlatList
						data={this.state.pickedUsers}
						ItemSeparatorComponent= {
							() =>	<View style={styles.itemsSeparator} />
						}
						renderItem={({index, item}) => <TontineUserItem pickable={false}  story={item}/> }
						keyExtractor={(item) => item.id}
					/>
				</View>
				<TontineFloatButton
					navigate={this.navigate}
					icon='checkmark'
				/>
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
		flex:4,
	},
	textInput:{
		backgroundColor:'white',
		padding:20,
	},
	textInputText:{
		paddingTop:10,
		color:'#1597bb',
	},
	listHeaderText:{
		fontSize:20,
		paddingVertical:20,
		alignSelf:'center',
		color:'#1597bb',

	}

})
