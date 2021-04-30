
import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, View, TextInput, Button, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import MessageItem from './MessageItem';

type Props = {
	messages:any[]
}

const  Messages = (props:Props) =>  {

		useEffect( () => {
		})

		return (
			<View style={styles.container}>
				<FlatList
					data={props.messages}
					renderItem={({index, item}) => <MessageItem message={item}/> }
					keyExtractor={(item) => item.id}
				
				/>
				
			</View>


		)
}

export default Messages;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		flex:1
	}
})
