import React from 'react';
import {Text, TextInput, Dimensions, View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import TontineUserItem from '../../components/TontineOverviewUserItem';
import Icon from "react-native-vector-icons/Ionicons";
import PaymentModal from '../../components/modals/PaymentModal';

type Props = {
	navigation:any,
	route:any,
}
type State = {
	data:any,
	pickedUsers:any[],
	paymentModalIsVisible:boolean,
}
export default class TontineOverview extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
			data:require('../../data/tontines.json'),
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

	setPaymentModalIsVisible = (value:boolean) => {
		this.setState({paymentModalIsVisible:value});
	}


	render(){
		return (
			<View style={styles.container}>
				<PaymentModal 
					setVisible={this.setPaymentModalIsVisible}
					visible={this.state.paymentModalIsVisible}/>
				<View style={styles.header}>
					<View style={styles.headerRow}>
						<Text style={styles.headerRowLabel}>Cagnote: 55.000 F / 60.000 F</Text>
					</View>
					<View style={styles.headerRow}>
						<Text style={styles.headerRowLabel}>Prochain versement: 10/07/2021</Text>
					</View>
				</View>
				<View style={styles.content}>
					<FlatList
						data={this.state.pickedUsers}
						ItemSeparatorComponent= {
							() =>	<View style={styles.itemsSeparator} />
						}
						renderItem={({index, item}) => <TontineUserItem pickable={false}  item={item}/> }
						keyExtractor={(item) => item.id}
					/>
				</View>
				<View style={styles.actionContainer}>
					<View style={styles.action}>
						<View style={styles.actionLabelContainer}>
							<Text style={styles.actionLabel}>Payer ma part</Text>
						</View>
						<TouchableOpacity 
							onPress={() =>{
									this.setPaymentModalIsVisible(true)
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
	content:{
		flex:3,
		paddingHorizontal:20,
	},
	headerRow:{
		backgroundColor:'white',
		padding:15,
		marginVertical:5,
		borderRadius:40,
		justifyContent:'center',
		alignItems:'center',
	},
	headerRowLabel:{
		fontSize:18,
		color:'gray',
	},
	actionContainer:{
		flex:1,
		justifyContent:'flex-start',
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
		minWidth:width/2,
	},
	actionLabel:{
		fontSize:20,
		color:'#1597bb',
	}

})
