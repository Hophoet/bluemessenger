import React, {useState, useEffect} from 'react';
import {StyleSheet, Modal, ImageBackground, View, TextInput, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	setVisible:any,
	visible:boolean
}

const  PhoneNumberVerificationModal = (props:Props) =>  {
		const [modalVisible, setModalVisible] = useState(false);

		useEffect( () => {
		})


		const _closeModal = () => {
			props.toggleModal();
		}


			return (
					
					<View style={styles.modalContainer}>
						<ImageBackground 
							style={styles.modalContentContainer} 
							source={require('../../assets/b.jpg')}>
							<View style={styles.closeButtonContainer}>
								<TouchableOpacity
									style={styles.closeButton}
									onPress={() => _closeModal()}
								>
									<Icon name='close' size={30} color='white' />
								</TouchableOpacity>
							</View>
							<View style={styles.row1}>
								<View style={styles.row1Content}>
									<View style={styles.infosContainer}>
										<Icon name='eye' color='white' size={25}/>
										<Text style={styles.info}>2.5K Views</Text>
									</View>
									<View style={styles.infosContainer}>
										<Icon name='chatbox' color='white' size={25}/>
										<Text style={styles.info}>2.5K comm</Text>
									</View>
								</View>
							</View>
							
							<View style={styles.statusContent}>
								<Text numberOfLines={1} style={styles.statusText}>On sait depuis longtemps</Text>
							</View>
							<View style={styles.statusFooter}>
								<View style={styles.statusIconsContainer}>
									<Text style={styles.statusIcon}>☺️</Text>
									<Text style={styles.statusIcon}>😆</Text>
									<Text style={styles.statusIcon}>😍</Text>
								</View>
								<View style={styles.statusActionsContainer}>
									<TouchableOpacity style={styles.statusActionContainer}>
										<View style={styles.statusActionIcon}>
											<Icon name='chatbox' color='gray' size={20}/>
										</View>
										<Text style={styles.statusActionText}>Repondre</Text>
									</TouchableOpacity>
									<TouchableOpacity style={styles.statusActionContainer}>
										<View style={styles.statusActionIcon}>
											<Icon name='chatbox' color='gray' size={20}/>
										</View>
										<Text style={styles.statusActionText}>Commenter</Text>
									</TouchableOpacity>
										
								</View>
							</View>
							
						</ImageBackground>
					</View>
					
					
			)

}
export default PhoneNumberVerificationModal;

const {width, height} = Dimensions.get('window');

const styles:any = StyleSheet.create({
	container:{
		flex:1,
	
	},
	modalContainer:{
		flex:1,
		backgroundColor:'#000a',
		justifyContent:'center',
		alignItems:'center',
		
	},
	modalContentContainer:{
		backgroundColor:'red',
		minWidth:width/1.2,
		height:width,
		alignSelf:'center',
		//marginVertical:width/2,
		borderRadius:20,
	},
	closeButton:{
		backgroundColor:'#1597bb',
		padding:10,
		borderRadius:60
	},
	closeButtonContainer:{
		//backgroundColor:'red',
		justifyContent:'flex-end',	
		alignItems:'flex-end',
		bottom:15,
		left:15
	},
	infosContainer:{
		//backgroundColor:'green',
		flexDirection:'row',
		alignSelf:'flex-end',
		opacity:.7
	},
	info:{
		color:'white',
		paddingHorizontal:5
		
	},
	statusIconsContainer:{
		flexDirection:'row',
		alignSelf:'center',
	},
	statusIcon:{
		fontSize:40,
	},
	row1Content:{
		//backgroundColor:'aqua',
		justifyContent:'flex-end',
	},

	statusContent:{ 
		//backgroundColor:'blue',
		flex:4,
		justifyContent:'center',
		alignItems:'center'
	},
	statusText:{
		color:'white',
		textAlign:'center',
		fontSize:30,
		opacity:.7,
	},
	statusFooter:{
		//backgroundColor:'yellow',
		flex:3,
	},
	statusIconsContainer:{
		flexDirection:'row',
		alignSelf:'center',
	},
	statusIcon:{
		fontSize:40,
	},
	statusActionsContainer:{
		//backgroundColor:'red',
		flexDirection:'row',
		justifyContent:'space-between',
		paddingHorizontal:20,
		opacity:.8,
	},
	statusActionContainer:{
		//backgroundColor:'green',
		flexDirection:'row',
		alignItems:'center',
	},
	statusActionText:{
		color:'white',
		padding:5,
	}

})
