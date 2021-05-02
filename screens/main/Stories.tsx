
import React from 'react';
import {Text, View, TextInput, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import StoryItem from '../../components/StoryItem';

type Props = {

}

type State = {
}

export default class Stories extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
			data:require('../../data/stories.json')
		}
	}

	_navigateToStoryDetail = (data) => {
		this.props.navigation.navigate('StoryDetail',{story:data});

	}



	render(){
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.data}
					renderItem={({index, item}) => <StoryItem  navigate={this._navigateToStoryDetail} story={item}/> }
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
