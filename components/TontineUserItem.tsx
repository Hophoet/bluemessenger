
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
}

const  StoryItem = (props:Props) =>  {
		const [picked, pick] = useState(false);
		const [inOrderList, setInOrderList] = useState(false);
		const [indexInOrderList, setIndexInOrderList] = useState(0);

		useEffect( () => {
			setUserInOrderList(props.story);
			if(!props.pickable){
				pick(true);
			}
		})

		const setUserInOrderList = (user) => {
			if(props.step == 'parameter' && props.customOrderTypePicked){
				let usersOrder = [...props.usersOrder];
				let userExists = usersOrder.find(item => item.id == user.id);
				if(userExists){
					//usersOrder = usersOrder.filter(item => item.id != user.id);
					let index = usersOrder.indexOf(userExists)
					setInOrderList(true);
					setIndexInOrderList(index+1);
				}
				else{
					setInOrderList(false);
				}
			}
			else if (props.step == 'parameter' && !props.customOrderTypePicked){
				setInOrderList(true);
				let usersOrder = [...props.usersOrder];
				let userExists = usersOrder.find(item => item.id == user.id);
				let index = usersOrder.indexOf(userExists)
				setIndexInOrderList(index+1);

			}

		}

		const _toggleUserSet = () => {
				props.toggleUserSet(props.story);
		}

		const _toogleUserInTheOrderList = () => {
			if(props.step == 'parameter'){
				props.toogleUserInTheOrderList(props.story);
			}
		}
		

		return (
			<TouchableOpacity 
				onPress={() =>{
					_toogleUserInTheOrderList();
					if(props.pickable){
						pick(!picked);
						_toggleUserSet();
					}
				}
				}
				style={styles.container}>
				<View style={styles.column1}>
					{ props.step != 'parameter' &&
						<View style={styles.statusDot}/>
					}
					<Image style={styles.image} source={require('../assets/user.jpg')}/>
				</View>
				<View style={styles.column2}>
					<Text style={styles.username}>{props.story.user}</Text>
					<Text >Description</Text>
				</View>
				<View style={styles.column3}>
					{ props.step != 'parameter' &&
					<TouchableOpacity 
						style={[
							(picked)?styles.pickButton:{}
						]}

					>
						<Icon name='checkmark' color='white' size={20}/>
					</TouchableOpacity>
					}
					{ props.step == 'parameter' &&
					<TouchableOpacity 
						style={[ 
							(inOrderList)
								?styles.parameterStepItemPicked
								:styles.parameterStepItemNotPicked
						]}

					>
						{ 
							inOrderList &&<Text style={styles.orderNumber}>{indexInOrderList}</Text>
						}
					</TouchableOpacity>


					}
				</View>

			</TouchableOpacity>


		)
}

export default StoryItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flexDirection:'row',
		marginLeft:5,
	},
	column1:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center'
	},
	statusDot:{
		backgroundColor:'red',
		width:width/40,
		height:width/40,
		borderRadius:90,
		margin:3
	},
	image:{
		width:width/5,
		height:width/5,
		borderRadius:90,
		borderWidth:3,
		borderColor:'#1597bb',
	},
	column2:{
		flex:2,
		justifyContent:'center',
		paddingHorizontal:10,
	},
	column3:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		flex:1,
	},
	username:{
		fontSize:20,
		fontWeight:'bold'
	},
	pickButton:{
        backgroundColor: '#1597bb',
		padding:5,
		borderRadius:90,
		justifyContent:'center',
		alignItems:'center',
	},
	parameterStepItemNotPicked:{
		backgroundColor:'#1112' ,//'#39f2',
		padding:5,
		borderRadius:90,
		justifyContent:'center',
		width:width/11,
		height:width/11,
		alignItems:'center',
		
	},
	parameterStepItemPicked:{
        backgroundColor: '#1597bb',
		padding:5,
		width:width/11,
		height:width/11,
		borderRadius:90,
		justifyContent:'center',
		alignItems:'center',
		opacity:1,
	},
	orderNumber:{
		fontSize:20,
		color:'white',
	}

})
