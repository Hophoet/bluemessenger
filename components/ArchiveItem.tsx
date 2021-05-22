
import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
}

const  ArchiveItem = (props:Props) =>  {

		useEffect( () => {
		})
		let _selectArchive = () => {
			props.selectArchive(props.item);
			props.toggleModal();
		}

		let path = props.item.path;
		return (
			<TouchableOpacity 
				onPress={_selectArchive}
				activeOpacity={.4}
				style={styles.container}>
				<View style={styles.column1}>
					<Image 
						style={styles.image} 
						source={require('../assets/b.jpg')}/>
				</View>
			</TouchableOpacity>


		)
}

export default ArchiveItem;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
	container:{
		alignSelf:'flex-start',
	},
	column1:{
	},
	image:{
		width:width/3,
		height:width/3,
	},

})
