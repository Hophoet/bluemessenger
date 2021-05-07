import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import StoryItem from '../../components/StoryItem';
import FloatButton from '../../components/FloatB';

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
					ItemSeparatorComponent= {
						() =>	<View style={styles.itemsSeparator} />
					}
					renderItem={({index, item}) => <StoryItem  navigate={this._navigateToStoryDetail} story={item}/> }
					keyExtractor={(item) => item.id}
				/>
				<FloatButton/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	itemsSeparator:{
		height:1,
		backgroundColor:'gray',
		marginVertical:5,
		opacity:.5,
	}

})
