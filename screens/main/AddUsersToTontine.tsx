import React from 'react';
import {View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import TontineUserItem from '../../components/TontineUserItem';
import TontineFloatButton from '../../components/TontineFloatButton';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	navigation:any
}
type State = {
	data:any,
}
export default class Stories extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
			data:require('../../data/stories.json'),
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
		this._customNav()
	}


	_navigateTo = (screen) => {
		this.props.navigation.navigate(screen,{});
	}

	


	render(){
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.data}
					ItemSeparatorComponent= {
						() =>	<View style={styles.itemsSeparator} />
					}
					renderItem={({index, item}) => <TontineUserItem  navigate={this._navigateToStoryDetail} story={item}/> }
					keyExtractor={(item) => item.id}
				/>
				<TontineFloatButton
					navigateTo={this._navigateTo}
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

})