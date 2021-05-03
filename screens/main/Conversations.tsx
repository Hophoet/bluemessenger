import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import ConversationItem from '../../components/ConversationItem';

type Props = {
	navigation:any
}
type State = {
	data:[]
}

export default class Conversations extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
			data:require('../../data/conversations.json')
		}
	}

	_navigateToConversationDetail = (data:any) => {
		this.props.navigation.navigate('ConversationDetail',{conversation:data});

	}



	render(){
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.data}
					renderItem={({index, item}:any) => <ConversationItem  navigate={this._navigateToConversationDetail} conversation={item}/> }
					keyExtractor={(item:any) => item.id}
				
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
