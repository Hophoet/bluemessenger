import React from 'react';
import {
	Text, 
	TextInput, 
	View, 
	TouchableOpacity, 
	FlatList, 
	Image,
	ImageBackground,
	Dimensions,
	StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import ProfileActionItem from '../../components/ProfileActionItem';

type Props = {
	navigation:any
}
type State = {
}
export default class Profile extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
			actions:require('../../data/profileActions.json'),
		
		}
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
		  title:'Marina',
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


	render(){
		return (
			<View style={styles.container}>
					<View style={styles.row1}>
						<ImageBackground 
							style={styles.imageBackground} 
							source={require('../../assets/b.jpg')}>

							<View style={styles.row1Header}>
								<TouchableOpacity style={styles.row1HeaderButton}>
									<Icon name='pencil' size={30} color='white'/>	
									<Text style={styles.row1HeaderButtonLabel}>Editer mon profile</Text>
								</TouchableOpacity>
							</View>
							<View style={styles.row1Center}>
								<Image 	
									source={require('../../assets/p.jpg')} 
									style={styles.profileImage}/>
								<Text style={styles.userName}>Marina</Text>
								<Text style={styles.userLocation}>Abidjan, Yopougan</Text>
							</View>
							<View style={styles.row1Footer}>
								<View style={styles.userInfoContainer}>
									<Text style={styles.userInfoNumber}>10K</Text>
									<Text style={styles.userInfoLabel}>STORIES</Text>
								</View>	
								<View style={styles.userInfoContainer}>
									<Text style={styles.userInfoNumber}>140</Text>
									<Text style={styles.userInfoLabel}>CONFIDENTS</Text>
								</View>	
								<View style={styles.userInfoContainer}>
									<Text style={styles.userInfoNumber}>24K</Text>
									<Text style={styles.userInfoLabel}>FOLLOWERS</Text>
								</View>	
							</View>
						</ImageBackground>
					</View>
					<View style={styles.row2}>
						
						<ImageBackground 
							style={styles.bgImage} 
							source={require('../../assets/p.jpg')}>
							<FlatList
								data={this.state.actions}
								ItemSeparatorComponent= {
									() =>	<View style={styles.itemsSeparator} />
								}
								renderItem={({index, item}) => <ProfileActionItem  
									navigate={this._navigateTo} 
									item={item}/> 
								}
								keyExtractor={(item:any) => item.id}
							

							/>
						</ImageBackground>
						<TouchableOpacity style={styles.logoutButton}>
							<Text style={styles.logoutButtonLabel}>Déconnexion</Text>
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
	imageBackground:{
		width:100,
	},
	row1:{
		backgroundColor:'red',
		flex:1,
	},
	row2:{
		//backgroundColor:'blue',
		flex:1,
	},
	imageBackground:{
		flex:1,
	},
	row1HeaderButtonLabel:{
		color:'white',
	},
	row1Header:{
		//backgroundColor:'red',
	},
	row1HeaderButton:{
		//backgroundColor:'red',
		justifyContent:'center',
		alignItems:'center',
		alignSelf:'flex-end',
	},
	row1Center:{
		//backgroundColor:'green',
		alignSelf:'center',
		justifyContent:'center',
		alignItems:'center',
		flex:2,
	},
	profileImage:{
		width:width/4,
		height:width/4,
		borderRadius:100,
		//elevation:10,
	},
	userName:{
		color:'white',
		fontWeight:'bold',
		fontSize:25,
	},
	userLocation:{
		color:'white',
		opacity:.5,
	},
	row1Footer:{
		//backgroundColor:'aqua',
		flexDirection:'row',
		justifyContent:'space-around',
		flex:1,
	},
	userInfoContainer:{
		justifyContent:'center',
		alignItems:'center',
	},
	userInfoNumber:{
		color:'white',
		fontSize:25,
	},
	userInfoLabel:{
		color:'white',
	},
	bgImage:{
		flex:4,
		paddingHorizontal:20,
        backgroundColor: '#1597bb',

	},
	itemsSeparator:{
		height:1,
		backgroundColor:'white',
	},
	logoutButton:{
		flex:1,
        backgroundColor: '#1597bb',
		justifyContent:'center',
		alignItems:'center',
	},
	logoutButtonLabel:{
		color:'white',
		fontSize:20,
	}

})
