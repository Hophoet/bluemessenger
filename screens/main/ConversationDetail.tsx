

import React from 'react';
import {Text, View, TextInput, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
}

type State = {
}

export default class ConversationDetail extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
		}
	}



	render(){
		let conversation = this.props.route.params.conversation;
		return (
			<View style={styles.container}>
				<Text>MESSAGES of {conversation.userPhoneNumber}</Text>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	}

})
