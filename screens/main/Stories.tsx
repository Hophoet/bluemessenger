import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import StoryItem from '../../components/StoryItem';
import FloatButton from '../../components/FloatB';
import NavHeader from '../../components/NavHeader';

type Props = {
	navigation:any
}
type State = {
	data:any,
	screen:any,
}
export default class Stories extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this._customNav();
		this.state = {
			data:require('../../data/stories.json'),
			screen:{ id:3, icon:'camera', label:'Stories'}

		}
	}


	componentDidMount(){
		
	}

	_navigateToStoryDetail = (data:any) => {
		this.props.navigation.navigate('StoryDetail',{story:data});
	 }

	_navigateTo = (screen:string) => {
		this.props.navigation.navigate(screen,{});
	}


	navigateTo = (screen:string) => {
		this.props.navigation.navigate(screen);
	}

	_customNav = () => {
		this.props.navigation.setOptions({
		  header: () => (
			<NavHeader screen={this.state.screen} navigateTo={this.navigateTo}/>
		  ),
		  title:'kdfj',
		  headerTintColor:'white',
          headerStyle: {
            backgroundColor: '#1597bb',
          },
		  headerLeftStyle:{color:'white'},

		
		});

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
