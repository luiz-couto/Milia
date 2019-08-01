import React from 'react';
import { Modal, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import styles from './styles';


class IncomeModal extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            isVisible: true,
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
        let { isVisible } = this.state

        return(
                <Modal style={styles.modal_container} 
                animationType="slide"
                visible={isVisible}
                onRequestClose={ () => {this.closeModal()}}
                > 
                <TouchableOpacity onPress={() => {this.closeModal()}}>
                    <Text>Cancelar</Text>
                </TouchableOpacity>
                    <Text>Heello Miiliia</Text>
                </Modal>
        );
    }
}

export default IncomeModal;