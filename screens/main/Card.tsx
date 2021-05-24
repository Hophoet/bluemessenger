import React from 'react';
import {Text, TextInput, Dimensions, View, TouchableOpacity, ScrollView, FlatList, StyleSheet} from 'react-native';
import TontineUserItem from '../../components/TontineUserItem';
import TontineFloatButton from '../../components/TontineFloatButton';
import Icon from "react-native-vector-icons/Ionicons";
import NavHeader from '../../components/NavHeader';


type Props = {
	navigation:any
}
type State = {
	data:any,
	pickedUsers:any,
	usersOrder:any
}
export default class Card extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this._customNav();
		this.state = {
			data:require('../../data/stories.json'),
			usersOrder:[],
			customOrderTypePicked:true,
			screen:{ id:6, icon:'card', label:'Cartes'},

		}
	}

	toggleOrderType = () => {
		if(this.state.customOrderTypePicked){
			console.log('moment')	
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

	componentDidMount() {
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
          headerTintColor:'white',
          headerStyle: {
            backgroundColor: '#1597bb',
          },
          headerLeftStyle:{color:'white'},


        });

    }


	toogleUserInTheOrderList = (user) => {
	}
	


	render(){
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<ScrollView 
						pagingEnabled
						style={styles.headerScrollView} 
						horizontal={true}
					 >
						<View style={styles.cardContainer}>
							<View style={styles.card}>
								<Text style={styles.cardText}>CARD</Text>
							</View>
							<Text style={styles.cardName}>Menthe</Text>
						</View>
						<View style={styles.cardContainer}>
							<View style={styles.card}>
								<Text style={styles.cardText}>CARD</Text>
							</View>
							<Text style={styles.cardName}>Visa</Text>
						</View>
					</ScrollView>

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
							<Text style={styles.buttonLabel}>Carte activate</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							onPress={this.toggleOrderType}
							style={[ (!this.state.customOrderTypePicked)
									?{...styles.orderTypePickedButton,right:20 }
									:styles.orderTypeNotPickedButton
							]}
						>
							<Text style={styles.buttonLabel}>Carte désactivé</Text>
						</TouchableOpacity>

					</View>
					<View style={styles.logoActionsContainer}>
						<View style={styles.actionContainer}>
							<TouchableOpacity style={styles.logoContainer}>
								<Icon name='lock-closed' size={35} color='#1597bb'/>
							</TouchableOpacity>
							<Text style={styles.actionName}>Voir les details de la carte</Text>
						</View>
						<View style={styles.actionContainer}>
							<TouchableOpacity style={styles.logoContainer}>
								<Icon name='eye' size={35} color='#1597bb'/>
							</TouchableOpacity>
							<Text style={styles.actionName}>Voir les details de la carte</Text>
						</View>
						<View style={styles.actionContainer}>
							<TouchableOpacity style={styles.logoContainer}>
								<Icon name='settings' size={35} color='#1597bb'/>
							</TouchableOpacity>
							<Text style={styles.actionName}>Voir les details de la carte</Text>
						</View>
					</View>

					<View style={styles.locationContainer}>
						<View style={styles.locationIconContainer}>
								<Icon name='settings' size={35} color='#1597bb'/>
						</View>
						<View style={styles.locationLabelsContainer}>
							<Text style={styles.locationTitle}>Carte des points de retraits</Text>
							<Text style={styles.locationDescription}>Trouvez un endroit prés de chez vous ou vous pouvez utilizer votre carte pour vos retraits</Text>
						</View>

					</View>
					
					<View style={styles.footer}>
						<View style={styles.footerRow1}>
							<Icon name='lock-closed' size={25} color='black'/>
							<Text style={styles.footerRow1Text}>Allez plus loin</Text>
						</View>
						<TouchableOpacity style={styles.footerRow2}>
							<View style={styles.footerRow2Column1}>
								<Text style={styles.footerRow2Title}>Adoptez la carte prémium</Text>	
								<Text style={styles.footerRow2Description}>Découvrez les avantages illimités qui vous sont offerts</Text>
							</View>
							<View style={styles.footerRow2Column2}>
								<Icon name='arrow-forward-outline' size={25} color='white'/>
							</View>
		
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
		//backgroundColor:'#39f2',
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
	cardText:{
		color:'white',
		fontSize:25,
	},
	buttonLabel:{
		color:'white',
		fontSize:15,
	},
	card:{
		backgroundColor:'#1597bb',
		alignItems:'center',
		justifyContent:'center',
		width:width/1.2,
		margin:10,
		borderRadius:10,
		flex:1,
	},
	cardName:{
		alignSelf:'center',
		textAlign:'center',
		fontSize:25,
		color:'#0005',
	},
	logoActionsContainer:{
		//backgroundColor:'red',
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center',
		paddingHorizontal:15,
	},
	actionContainer:{
		flex:1,
	},
	logoContainer:{
		backgroundColor:'#39f3',
		padding:20,
		borderRadius:100,
		marginHorizontal:10,
		alignSelf:'center',
	},
	actionName:{
		textAlign:'center',
		color:'#0006',
	},
	locationContainer:{
		//backgroundColor:'red',
		flexDirection:'row',
		borderWidth:StyleSheet.hairlineWidth,
		borderColor:'gray',
		borderRadius:5,
		marginHorizontal:20,
		padding:5,
	},
	locationIconContainer:{
		justifyContent:'center',
		alignItems:'center',
		flex:1,
	},
	locationLabelsContainer:{
		flex:4,
	},
	locationTitle:{
		color:'#1597bb',
		fontSize:20,
	},
	locationDescription:{
		color:'#0008',
		fontSize:13,
	},
	footer:{
		marginTop:10,
	},
	footerRow1:{
		flexDirection:'row',
		alignItems:'center',
		marginHorizontal:20,
	},
	footerRow1Text:{
		fontSize:20,
		fontWeight:'bold',
	},
	footerRow2:{
		flexDirection:'row',
		backgroundColor:'black',
		marginHorizontal:20,
		borderRadius:10,
		paddingHorizontal:20,
		marginTop:5,
	},
	footerRow2Column1:{
		paddingVertical:5,
		flex:1,
		justifyContent:'center',
	},
	footerRow2Title:{
		fontSize:22,
		color:'white',
		fontWeight:'bold',
	},
	footerRow2Description:{
		color:'white',
	},
	footerRow2Column2:{
		justifyContent:'center',
		alignItems:'center',
	}



})
