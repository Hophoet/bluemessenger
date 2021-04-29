import React, {useState} from 'react';
import {StyleSheet, View, Button, Text, TouchableOpacity} from 'react-native';
import PickerModal from 'react-native-picker-modal-view';

type Props = {

}

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
		justifyContent:'center',
	},
	selectedItem:{
		color:'white',
		fontSize:20
	}
})
