import React from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ConversationItem from '../../components/ConversationItem';
import Icon from "react-native-vector-icons/Ionicons";
import NavHeader from '../../components/NavHeader';

type Props = {
	navigation:any
}
type State = {
	data:[]
}

export default class Conversations extends React.Component<Props, State>{
	constructor(props:Props){
		super(props);
		this._customNav();
		this.state = {
			data:require('../../data/conversations.json'),
			screen:{ id:2, icon:'chatbox', label:'Chat'}
		}
	}

	componentDidMount(){
		
	}

	_navigateToConversationDetail = (data:any) => {
		this.props.navigation.navigate('ConversationDetail',{conversation:data});

	}

	navigateTo = (screen) => {
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
