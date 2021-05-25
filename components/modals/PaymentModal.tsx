import React, {useState, useEffect} from 'react';
import {StyleSheet, Modal, Image, View, TextInput, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	setVisible:any,
	visible:boolean
}

const  PaymentModal = (props:Props) =>  {
		const [modalVisible, setModalVisible] = useState(false);
		const [pickedPaymentMethod, pickPaymentMethod] = useState(false);
		const [paymentMethods, setPaymentMethods] = useState(
			[
				{name:'visa', logo:'lkdf.png'},
				{name:'paypal', logo:'paypal.png'},

			]
		);
		let amount:number;
		let phoneNumber:number;
		let name:string;
		let date:number;
		let code:number;
		const amountRef:any = React.useRef();
		const phoneNumberRef:any = React.useRef();
		const nameRef:any = React.useRef();
		const dateRef:any = React.useRef();
		const codeRef:any = React.useRef();

		useEffect( () => {
			setModalVisible(props.visible)	
		})


		const _closeModal = () => {
			props.setVisible(false)
		}
		const _validate = () => {
		}

		const _renderContent = () => {
			if(!pickedPaymentMethod){
				return (
					<View style={styles.firstContentContainer}>
						<Text style={styles.firstContentTitle}>Payer avec</Text>
						<View style={styles.paymentMethodsContainer}>
							<TouchableOpacity
								onPress={()=>{ pickPaymentMethod(true)}}
								activeOpacity={.5}
							>
								<Image
									style={styles.paymentMethodImage}
									source={require('../../assets/login-bg.jpg')}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={()=>{ pickPaymentMethod(true)}}
								activeOpacity={.5}
							>
								<Image
									style={styles.paymentMethodImage}
									source={require('../../assets/login-bg.jpg')}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								onPress={()=>{ pickPaymentMethod(true)}}
								activeOpacity={.5}
							>
								<Image
									style={styles.paymentMethodImage}
									source={require('../../assets/login-bg.jpg')}
								/>
							</TouchableOpacity>
						</View>
						<TouchableOpacity
							style={styles.choosePaymentButton}
							onPress={() => {}}
						>
							<Text style={styles.choosePaymentLabel}>Valider</Text>
						</TouchableOpacity>
					</View>

				)

			}	
			return (
				<View style={styles.secondContentContainer}>
					<Icon style={styles.lockLogo} name='lock-closed' size={37} color='#1597bb'/>
					<View style={styles.textInputsContainer}>
						<View style={
								[styles.amountTextInputContainer, styles.textInputContainer]
								}>
							<Text style={styles.amountText}>Montant</Text>
							<TextInput
								ref={amountRef}
								style={styles.textInput}
								placeholderTextColor='#1597bb'
								keyboardType="numeric"
								maxLength={1}
								textAlign='center'
								onSubmitEditing={() => phoneNumberRef.current.focus()}
							/>
						</View>
						<View style={
								[styles.textInputContainer]
								}>
							<TextInput
								placeholder='Veuilez entrer votre numéro'
								ref={phoneNumberRef}
								style={styles.textInput}
								placeholderTextColor='#1597bb'
								keyboardType="numeric"
								maxLength={1}
								onSubmitEditing={() => nameRef.current.focus()}
							/>
						</View>
						<View style={
								[styles.textInputContainer]
								}>
							<TextInput
								placeholder='Nom du proprietaire'
								ref={nameRef}
								style={styles.textInput}
								placeholderTextColor='#1597bb'
								keyboardType="numeric"
								maxLength={1}
								onSubmitEditing={() => dateRef.current.focus()}
							/>
						</View>
						<View style={
								[ styles.lastTextInputsContainer]
								}>
							<View style={[styles.textInputContainer, styles.t1]}>
							<TextInput
								placeholder='09/21'
								ref={dateRef}
								style={[styles.textInput]}
								placeholderTextColor='#1597bb'
								keyboardType="numeric"
								textAlign='center'
								maxLength={1}
								onSubmitEditing={() => codeRef.current.focus()}
							/>
							</View>
							<View style={[styles.textInputContainer, , styles.t2]}>
							<TextInput
								placeholder='802'
								ref={codeRef}
								style={[styles.textInput, styles.t2]}
								placeholderTextColor='#1597bb'
								keyboardType="numeric"
								textAlign='center'
								maxLength={1}
								onSubmitEditing={() =>{}}
							/>
							</View>
						</View>
					</View>
					<TouchableOpacity
						style={styles.validateButton}
						onPress={() => _validate()}
					>
						<Text style={styles.validate}>Valider</Text>
					</TouchableOpacity>
				</View>

			)

		}

		if(modalVisible){
			return (
				<Modal 	
					visible={modalVisible}
					transparent={true}
				>
					<View style={styles.modalContainer}>
						<View style={styles.modalContentContainer}>
							<View style={styles.closeButtonContainer}>
								<TouchableOpacity
									style={styles.closeButton}
									onPress={() => _closeModal()}
								>
									<Icon name='close' size={30} color='white' />
								</TouchableOpacity>
							</View>
							{_renderContent()}
							
						</View>
					</View>
					
				</Modal>
					
			)
		}
		return null

}
export default PaymentModal;

const {width, height} = Dimensions.get('window');

const styles:any = StyleSheet.create({
	container:{
		flex:1,
	
	},
	modalContainer:{
		flex:1,
		backgroundColor:'#000B',
		
	},
	modalContentContainer:{
		backgroundColor:'white',
		minWidth:width/1.2,
		minHeight:width,
		alignSelf:'center',
		marginVertical:width/2,
		borderRadius:20,
		top:-width/3,
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
		bottom:10,
		left:10
	},
	firstContentContainer:{
		//backgroundColor:'red',
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	firstContentTitle:{
		fontSize:25,
		fontWeight:'bold',
		color:'#1597bb',
	},
	secondContentContainer:{
		//backgroundColor:'red',
		flex:1,
		justifyContent:'space-around',
		paddingHorizontal:15,
	},
	content:{
		textAlign:'center',
		fontSize:15,
		paddingHorizontal:20,
	},
	choosePaymentLabel:{
		color:'#1597bb',
		fontSize:25
	},
	validate:{
		color:'#1597bb',
		fontSize:25
	},
	textInputsContainer:{
		//backgroundColor:'red',
		justifyContent:'center',
		flex:3,
	},
	amountTextInputContainer:{
		flexDirection:'row',
		alignItems:'center',

	},
	amountText:{
		marginLeft:10,
		fontSize:20,
		color:'#1597bb',
	},
	textInputContainer:{
		borderColor:'#1597bb',
		color:'#1597bb',
		borderWidth:1,
		borderRadius:50,
		marginBottom:10,
		flex:1,

	},
	textInput:{
		fontSize:18,
		paddingHorizontal:20,
		color:'#1597bb',
		
	},	
	paymentMethodsContainer:{
		flexDirection:'row',
		paddingVertical:30,
	},
	paymentMethodImage:{
		width:width/5,
		height:width/5,
		borderRadius:5,
		marginHorizontal:5,
	},
	lockLogo:{
		alignSelf:'center',
		//flex:1,
		paddingBottom:5,
	},		
	lastTextInputsContainer:{
		flexDirection:'row',
	},
	t1:{
		width:width/2,
		marginHorizontal:5
	},
	t2:{
		width:width/4,
		marginHorizontal:5
	},
	validateButton:{
		paddingVertical:10,
		justifyContent:'center',
		alignItems:'center',
		paddingBottom:20,
	},
	

})
