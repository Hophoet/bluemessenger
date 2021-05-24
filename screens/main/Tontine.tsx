import React from 'react';
import {View, FlatList, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import NavHeader from '../../components/NavHeader';


type Props = {
	navigation:any
}
type State = {
}
export default class Tontine extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this._customNav();
		this.state = {
			screen:{ id:5, icon:'cash', label:'Tontine'},
		}
	}


	_navigateTo = (screen) => {
		this.props.navigation.navigate(screen,{});
	}

	navigateTo = (screen) => {
        this.props.navigation.navigate(screen,{});
    }

   _customNav = () => {
        this.props.navigation.setOptions({
          header: () => (
            <NavHeader screen={this.state.screen} navigateTo={this.navigateTo}/>
          ),
          title:'kdfj',
          headerTintColor:'white',
          headerStyle: {
            backgroundColor: '#1597bb',
          },
          headerLeftStyle:{color:'white'},


        });

    }


	


	render(){
		return (
			<View style={styles.container}>
				<View style={styles.textContainer}>
					<Text style={styles.title}>Comment ca marche ?</Text>
					<Text style={styles.description}>
 toutes  Sous quel angle ? Cependant, plusieurs choses distinguent l'écriture du blog d'un pacte autobiographique. D'une part, les lecteurs peuvent généralement commenter immédiatement le contenu d'un blog, au vu et au su de tous. Par ailleurs, le nombre de lecteurs d'un blog varie bien plus rapidement que le nombre de lecteurs d'un livre. En effet, par la nature des flux et des 
					</Text>
					<Text style={styles.description}>
					 toutes border ? À quelle fréquence ? Sous quel angle ? Cependant, plusieurs choses distinguent l'écriture du blog d'un pacte autobiographique. D'une part, les lecteurs peuvent généralement commenter immédiatement le contenu d'un blog, au vu et au su de tous. Par ailleurs, le nombre de lecteurs d'un blog varie bien plus rapidement que le nombre de lecteurs d'un livre. En effet, par la nature des flux et des 
					</Text>

				</View>
				<View style={styles.actionContainer}>
					<View style={styles.action}>
						<View style={styles.actionLabelContainer}>
							<Text style={styles.actionLabel}>Créer une tontine</Text>
						</View>
						<TouchableOpacity 
							onPress={() =>{
								this._navigateTo('AddUsersToTontine');
								}
							}
							style={styles.actionButton}>
							<Icon name='add' size={30} color='white'/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container:{
		flex:1,
		padding:20,
	},
	textContainer:{
		flex:2,
		alignItems:'center',
		justifyContent:'center',
	},
	title:{
		fontSize:30,
		color:'#1597bb',
		marginBottom:20,
	},
	description:{
		marginBottom:15,
		opacity:.5,
	},
	actionContainer:{
		flex:1,
		justifyContent:'center',
		//backgroundColor:'blue',
	},
	action:{
		flexDirection:'row',
		alignSelf:'center',
	},
	actionButton:{
		justifyContent:'center',
		alignItems:'center',
		borderRadius:100,
		padding:15,
		backgroundColor:'#1597bb',
		right:20,
	},
	actionLabelContainer:{
		justifyContent:'center',
		alignItems:'center',
		borderRadius:20,
		backgroundColor:'#39f2',
		alignSelf:'center',
		padding:7,
		paddingRight:30,
	},
	actionLabel:{
		fontSize:20,
		color:'#1597bb',
	}
})
