

import React from 'react';
import {Text, Image, Animated, ImageBackground, ScrollView, Button, Dimensions, View, TextInput, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Messages from '../../components/Messages';
import StoryDetailItem from '../../components/StoryDetailItem';
import StoryPaginator from '../../components/StoryPaginator';

type Props = {
	navigation:any
}

type State = {
	data:any,
	currentIndex:any,
}

export default class StoryDetail extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this._customNav();
		this.scrollX =  new Animated.Value(0);
		this.slidesRef = null;
		this.viewConfig = { viewAreaCoveragePercentThreshold:50}
		this.state = {
			data:require('../../data/stories.json'),
			currentIndex:0,
		}
	}

	_customNav = () => {
		this.props.navigation.setOptions({
		  headerRight: () => (
			<View style={styles.headerRightContainer}>
				<TouchableOpacity style={styles.headerButton}>
					<Icon name='search' size={25} color='white'/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.headerButton}>
					<Icon name='ellipsis-vertical' size={25} color='white'/>
				</TouchableOpacity>
			</View>
		  ),
		  title:this.props.route.params.story.user ,//this.props.route.params.story.userPhoneNumber,
		  headerTintColor:'white',
          headerStyle: {
            backgroundColor: '#1597bb',
          },
		  headerLeftStyle:{color:'white'},

		
		});

	}

	
	viewableItemsChanged = ({ viewableItems }:any) => {
			this.setState({currentIndex:viewableItems[0].index});
	}

	_navigateToStoryDetail = (data:any) => {
		this.props.navigation.navigate('StoryDetail',{story:data});

	}

	
	
	componentDidMount(){
	}



	render(){
		let story = this.props.route.params.story;
		return (
			<View style={styles.container}>
				<FlatList
					data={this.state.data}
					horizontal
					pagingEnabled
					onScroll={Animated.event([{ nativeEvent: {contentOffset:{ x: this.scrollX }}}], {
						useNativeDriver: false
					})}
					scrollEventThrottle={32}
					onViewableItemsChanged={this.viewableItemsChanged}
					viewabilityConfig={this.viewConfig}
					ref={this.slidesRef}
					renderItem={({index, item}) => <StoryDetailItem  
						navigate={this._navigateToStoryDetail} 
						story={item}/> 
					}
					keyExtractor={(item:any) => item.id}
				

				/>
				<StoryPaginator style={styles.paginator} scrollX={this.scrollX} data={this.state.data}/>
			</View>
		)
	}
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	image:{
		width:width,
		height:height,
	},
	scrollViewContainer:{
		flex:1,
	},
	messagesContainer:{
		flex:1,
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
	},
	headerRightContainer:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	headerButton:{
		//backgroundColor:'red',
		padding:5,
		marginRight:5,
	},
	paginator:{
		justifyContent:'center',
		alignItems:'center',
		position:'absolute',
		flexDirection:'row',
        height:64,
        width:width,
		top:height - 140,
        alignSelf:'flex-start',
	}
})

