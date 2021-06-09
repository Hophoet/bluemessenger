import React from 'react';
import {Modal, ScrollView, Text, ImageBackground, TextInput, Image, Dimensions, View, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import ArchiveItem from '../../components/ArchiveItem';
import ArchiveModal from '../../components/modals/ArchiveModal';
import Icon from "react-native-vector-icons/Ionicons";
import PaymentModal from '../../components/modals/PaymentModal';

type Props = {
	navigation:any
}
type State = {
	data:any,
	modalVisible:boolean,
	selectedArchive:any,
	pickedUsers:any[]
}
export default class Archives extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
			data:require('../../data/archives.json'),
			modalVisible:false,
			selectedArchive:null,
		}
	}

	toggleModal = () => {
		this.setState({modalVisible:!this.state.modalVisible});
	}

	selectArchive = (archive:any) => {
		this.setState({selectedArchive:archive});
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

	
	navigate = () => {
		this.props.navigation.navigate(
			'ParameterTontine',
			{pickedUsers:this.state.pickedUsers}
		);
	}



	render(){
		return (
			<View style={styles.container}>
				<Modal 
					transparent={true}
					onRequestClose={this.toggleModal}  
					visible={this.state.modalVisible}
				>
					<ArchiveModal toggleModal={this.toggleModal}/>
				</Modal>
				<View style={styles.row1}>
					<ImageBackground 
						style={styles.row1ImageBackground} 
						source={require('../../assets/b.jpg')}>
						<View style={styles.row1Column1}>
						</View>
						<View style={styles.row1Column2}>
							<Image 	
								source={require('../../assets/p.jpg')} 
								style={styles.profileImage}/>
							<Text style={styles.userName}>Marima</Text>
							<Text style={styles.userLocation}>Abidjan, Yopougon</Text>
						</View>
						<View style={styles.row1Column3}>
							<TouchableOpacity
								style={styles.editProfileButton}
							>
								<Icon name='pencil' size={30} color='white'/>
								<Text style={styles.editProfileButtonLabel}>Editer mon profile </Text>
								
							</TouchableOpacity>
						</View>
					</ImageBackground>
				</View>
				<View style={styles.row2}>
					<ScrollView style={styles.archivesScrollView}>
						<View style={styles.archivesContainer}>
					{
						this.state.data.map((item:any) => {

							return (
								<ArchiveItem 
									key={item.id}
									selectArchive={this.selectArchive}
									toggleModal={this.toggleModal} 
									item={item}/>
							)

						})
					}
						</View>
					</ScrollView>
						<TouchableOpacity 
							onPress={()=>this._navigateTo('AuthNav')}
							style={styles.logoutButton}>
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
	row1:{
		backgroundColor:'red',
		flex:2,
	},
	row1ImageBackground:{
		flex:1,
		flexDirection:'row',
	},
	row1Column1:{
		flex:1,
		//backgroundColor:'aqua'
	},
	row1Column2:{
		flex:1,
		//backgroundColor:'#aece',
		justifyContent:'center',
		alignItems:'center',
	},
	row1Column3:{
		flex:1,
		//backgroundColor:'#aace'
	},
	profileImage:{
		width:width/3,
		height:width/3,
		borderRadius:100,
		//elevation:10,
	},
	userName:{
		fontSize:25,
		color:'white',
		fontWeight:'bold',
	},
	userLocation:{
		color:'white',
		opacity:.5,
	},
	row2:{
	 	//backgroundColor:'blue',
		flex:4,
	},
	editProfileButton:{
		alignItems:'center',
		justifyContent:'center',
		
	},
	editProfileButtonLabel:{
		color:'white',
		fontSize:10,
	},
	archivesScrollView:{
		//flexDirection:'row',
	},
	archivesContainer:{
		flexDirection:'row-reverse',
		flexWrap:'wrap',

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
