
import React from 'react';
import {Text, View, TextInput, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import ConversationItem from '../../components/ConversationItem';

type Props = {

}

type State = {
}

export default class Conversations extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
			data:require('../../data/conversations.json')
		}
	}

	_navigateToConversationDetail = (data) => {
		this.props.navigation.navigate('ConversationDetail',{conversation:data});

	}



	render(){
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.data}
					renderItem={({index, item}) => <ConversationItem  navigate={this._navigateToConversationDetail} conversation={item}/> }
					keyExtractor={(item) => item.id}
				
				/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container:{
		flex:1,
	}

})
