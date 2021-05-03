import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import StoryItem from '../../components/StoryItem';

type Props = {
	navigation:any
}
type State = {
	data:any,
}
export default class Stories extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this.state = {
			data:require('../../data/stories.json'),
		}
	}

	_navigateToStoryDetail = (data:any) => {
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
