

import React from 'react';
import {Text, View, TextInput, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Messages from '../../components/Messages';

type Props = {
}

type State = {
}

export default class ConversationDetail extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
	}



	render(){
		let conversation = this.props.route.params.conversation;
		return (
			<View style={styles.container}>
				<View style={styles.messagesContainer}>
					<Messages messages={conversation.messages}/>
				</View>
				<View style={styles.formContainer}>
					<TouchableOpacity style={styles.fButton}>
						<Icon name='chevron-down' size={25} color='#1597bb'/>
					</TouchableOpacity>
					<View style={styles.textInputContainer}>
						<TextInput 
							placeholder='Entrer votre message'
							style={styles.textInput}
						/>
					</View>
					<TouchableOpacity style={styles.sButton}>
						<Icon name='arrow-forward' size={25} color='#1597bb'/>
					</TouchableOpacity>
				</View>
				
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	messagesContainer:{
		flex:1,
	},
	formContainer:{
		flexDirection:'row',
		//backgroundColor:'red',
		justifyContent:'center',
		//alignItems:'center',
		paddingVertical:10,
	},
	textInputContainer:{
		borderColor:'#1597bb',
		borderWidth:StyleSheet.hairlineWidth,
		flex:1,
		marginHorizontal:5,
		borderRadius:5,
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
	}

})
