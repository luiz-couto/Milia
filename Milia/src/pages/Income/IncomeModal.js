import React from 'react';
import { Modal, View, Text, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import styles from './styles';


class IncomeModal extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            isVisible: true,
            incomeName: '',
            incomeValue: null,
        }
    }

    closeModal() {
        console.log('passou aqui');
        this.setState({ isVisible: false }, () => {
            setTimeout(this.props.closeModal, 500);
        });
    }
    
    render(){
        
        const navigation = this.props
        let { 
            isVisible,
            incomeName,
            incomeValue,
        } = this.state

        return(
                <Modal style={styles.modal_container} 
                animationType="slide"
                visible={isVisible}
                onRequestClose={ () => {this.closeModal()}}
                > 
                <TouchableOpacity onPress={() => {this.closeModal()}}>
                    <Text>Cancelar</Text>
                </TouchableOpacity>

                <TextInput
                style={{ height: 70, borderColor: 'gray', borderWidth: 2}}
                onChangeText={(incomeName) => { this.setState ({ incomeName })}}
                value={incomeName}
                >
                </TextInput>
                
                <TextInput
                style={{ height: 70, borderColor: 'gray', borderWidth: 2}}
                onChangeText={(incomeValue) => { this.setState ({ incomeValue })}}
                value={incomeValue}
                ></TextInput>

                <TouchableOpacity onPress={() => {}}>
                    <Text>Adicionar</Text>
                </TouchableOpacity>
                    
                </Modal>
        );
    }
}

export default IncomeModal;