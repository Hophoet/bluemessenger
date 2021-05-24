import React, {useState, useEffect} from 'react';
import {StyleSheet, Modal, View, TextInput, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	setVisible:any,
	visible:boolean
}

const  PhoneNumberVerificationModal = (props:Props) =>  {
		const [modalVisible, setModalVisible] = useState(false);
		const [clickedOK, setClickedOK] = useState(false);
		let number1:number;
		let number2:number;
		let number3:number;
		let number4:number;
		let number5:number;
		const number1Ref:any = React.useRef();
		const number2Ref:any = React.useRef();
		const number3Ref:any = React.useRef();
		const number4Ref:any = React.useRef();
		const number5Ref:any = React.useRef();

		useEffect( () => {
			setModalVisible(props.visible)	
		})


		const _closeModal = () => {
			setClickedOK(false);
			props.setVisible(false)
		}
		const _validate = () => {
			if(!isNaN(number1) && 
				!isNaN(number2) && 
				!isNaN(number3) && 
				!isNaN(number4) && 
				!isNaN(number5)
			){
				//console.log('valide form')
				_closeModal()
				props.navigateTo('ChatNav');	
			}
			else{
				alert('Entrer votre code de verification')
			}
		}

		const _renderContent = () => {
			if(!clickedOK){
				return (
					<View style={styles.firstContentContainer}>
						<Text style={styles.firstContentTitle}>Vérification</Text>
						<Text style={styles.content}>Vérification skdfj sdfklsd fjslfjsldfj sdf lksdjf sdf lsjdfls  sdljkfs df lksdjf sdf lsdfj sdfjskld f klsdf sdflsdflla the s aieu skdfjsldfj sdlfjsldfj sdlfjsd flsjdflsdfjsl flksdfjs fslkdfj sldfs jklfjs fls fjlsdfj sldfjsldfjsldf </Text>
						<TouchableOpacity
							style={styles.okButton}
							onPress={() => setClickedOK(true)}
						>
							<Text style={styles.ok}>OK</Text>
						</TouchableOpacity>
					</View>

				)

			}	
			return (
				<View style={styles.secondContentContainer}>
					<Text style={styles.secondContentTitle}>Code de vérification</Text>
					<View style={styles.textInputsContainer}>
						<TextInput
							autoFocus={true}
							ref={number1Ref}
							style={styles.textInput}
							placeholderTextColor='#1597bb'
							keyboardType="numeric"
							maxLength={1}
							textAlign='center'
							onChangeText={text => number1 = parseInt(text)}
							onSubmitEditing={() => number2Ref.current.focus()}
						/>
						<TextInput
							ref={number2Ref}
							style={styles.textInput}
							placeholderTextColor='#1597bb'
							keyboardType="numeric"
							textAlign='center'
							maxLength={1}
							onChangeText={text => number2 = parseInt(text)}
							onSubmitEditing={() => number3Ref.current.focus()}
						/>
						<TextInput
							ref={number3Ref}
							style={styles.textInput}
							textAlign='center'
							placeholderTextColor='#1597bb'
							keyboardType="numeric"
							maxLength={1}
							onChangeText={text => number3 = parseInt(text)}
							onSubmitEditing={() => number4Ref.current.focus()}
						/>
						<TextInput
							ref={number4Ref}
							style={styles.textInput}
							textAlign='center'
							placeholderTextColor='#1597bb'
							keyboardType="numeric"
							maxLength={1}
							onChangeText={text => number4 = parseInt(text)}
							onSubmitEditing={() => number5Ref.current.focus()}
						/>
						<TextInput
							ref={number5Ref}
							style={styles.textInput}
							textAlign='center'
							placeholderTextColor='#1597bb'
							keyboardType="numeric"
							maxLength={1}
							onChangeText={text => number5 = parseInt(text)}
							onSubmitEditing={() => _validate()}
							returnKeyType='send'
						/>
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
export default PhoneNumberVerificationModal;

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
		top:-80,
		backgroundColor:'white',
		//maxWidth:width/1.2,
		height:width,
		alignSelf:'center',
		marginVertical:width/2,
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
		bottom:10,
		left:10
	},
	firstContentContainer:{
		//backgroundColor:'red',
		maxWidth:width/1.2,
		flex:1,
		justifyContent:'space-around',
		alignItems:'center'
	},
	firstContentTitle:{
		fontSize:25,
		fontWeight:'bold',
		color:'#1597bb',
    	textDecorationLine: 'underline',
	},
	secondContentContainer:{
		//backgroundColor:'red',
		flex:1,
		maxWidth:width/1.2,
		minWidth:width/1.2,
		justifyContent:'space-around',
		alignItems:'center'
	},
	secondContentTitle:{
		fontSize:25,
		fontWeight:'bold',
		color:'#1597bb',
    	textDecorationLine: 'underline',
	},
	content:{
		textAlign:'center',
		fontSize:15,
		paddingHorizontal:20,
	},
	ok:{
		color:'#1597bb',
		fontSize:25
	},
	validate:{
		color:'#1597bb',
		fontSize:25
	},
	textInputsContainer:{
		//backgroundColor:'red',
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	textInput:{
		borderColor:'#1597bb',
		color:'#1597bb',
		borderWidth:1,
		marginHorizontal:10,
		fontSize:30,
		padding:5,
		borderRadius:10,
		flex:1
		
	}

})
