import React from 'react';
import {View, TouchableOpacity, FlatList, StyleSheet, Text} from 'react-native';
import TontineUserItem from '../../components/TontineUserItem';
import SettingsItem from '../../components/SettingsItem';
import TontineFloatButton from '../../components/TontineFloatButton';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	navigation:any
}
type State = {
	data:any,
	pickedUsers:any
}
export default class Settings extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
			data:require('../../data/settingActions.json'),
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
		  title:'Réglage',
		  headerTintColor:'white',
          headerStyle: {
            backgroundColor: '#1597bb',
          },
		  headerLeftStyle:{color:'white'},

		
		});

	}

	componentDidMount() {
		this._customNav()
	}


	navigate = (screen) => {
		this.props.navigation.navigate(
			screen,
			{}
		);
	}

	


	render(){
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.data}
					ItemSeparatorComponent= {
						() =>	<View style={styles.itemsSeparator} />
					}
					renderItem={({index, item}) =>(
						 <SettingsItem 
							navigate={this.navigate}
							item={item}/>
						)
					 }
				
					keyExtractor={(item) => item.id}
				/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container:{
		flex:1,
		margin:20,
	},
	itemsSeparator:{
		backgroundColor:'gray',
		marginBottom:20,
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

})
