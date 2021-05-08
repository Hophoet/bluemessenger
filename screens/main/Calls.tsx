import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import CallItem from '../../components/CallItem';
import FloatButton from '../../components/CallFloatButton';

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

	_navigateTo = (screen) => {
		this.props.navigation.navigate(screen,{});
	}

	


	render(){
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.data}
					ItemSeparatorComponent= {
						() =>	<View style={styles.itemsSeparator} />
					}
					renderItem={({index, item}) => <CallItem  navigate={this._navigateToStoryDetail} story={item}/> }
					keyExtractor={(item) => item.id}
				/>
				<FloatButton
					navigateTo={this._navigateTo}
				/>
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
