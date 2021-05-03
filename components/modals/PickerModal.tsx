import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import PickerModal from 'react-native-picker-modal-view';
import Icon from "react-native-vector-icons/Ionicons";

type Props = {
	data:[],
	style:any,
	defaultLabel:string
};

const  Modal = (props:Props) =>  {
		const [selectedItem, setSelectedItem] = useState(null);

		const onClosed = () => {
			console.log('close key pressed')
		}

		const onSelected = (selected:any) => {
			setSelectedItem(selected);
		}

		const onBackButtonPressed = () => {
			console.log('back key pressed')
		}


		return (
			<View style={styles.container}>
				<PickerModal
					renderSelectView={(disabled, selected, showModal) =>
						<TouchableOpacity
							onPress={showModal}
							activeOpacity={.5}
							style={[styles.button, props.style]}
						>
							<Text style={styles.selectedItem}>
								{(selected.Name)?selected.Name:props.defaultLabel}
							</Text>	
							<Icon name='chevron-down-outline' size={26} color='white'/>
						</TouchableOpacity>
					}
					onSelected={onSelected}
					onClosed={onClosed}
					onBackButtonPressed={onBackButtonPressed}
					items={props.data}
					sortingLanguage={'tr'}
					showToTopButton={true}
					selected={selectedItem}
					showAlphabeticalIndex={true}
					autoGenerateAlphabeticalIndex={true}
					selectPlaceholderText={'Choose one...'}
					onEndReached={() => console.log('list ended...')}
					searchPlaceholderText={'Search...'}
					requireSelection={false}
					autoSort={false}
				/>
			</View>
		)

}

export default Modal;

const styles = StyleSheet.create({
	container:{
		justifyContent:'center',
	},
	button:{
		//backgroundColor:'green',
		paddingVertical:10,
		borderBottomWidth:2,
		borderColor:'white',
		height:50,
		flexDirection:'row',
		justifyContent:'space-between',
		
	},
	selectedItem:{
		color:'white',
		fontSize:20
	}
})
