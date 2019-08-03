import React from 'react';
import { Modal, View, Text, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import styles from './styles';

let db = openDatabase('inc_list','1.0','Income List', -1)

class SpendModal extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            isVisible: true,
            spendName: '',
            spendValue: '',
        }
    }

    closeModal() {
        console.log('passou aqui');
        this.setState({ isVisible: false }, () => {
            setTimeout(this.props.closeModal, 500);
        });
    }
    
    saveData() {
        let {
            spendName,
            spendValue
        } = this.state
        
        console.log(spendName);
        console.log(spendValue);

        let spend_already = '0'

        db.transaction(function(tx){
            tx.executeSql('INSERT INTO spend_table (spend_name,spend_value,spend_already) VALUES(?,?,?)',[spendName,spendValue,spend_already]);
        })

        this.closeModal();
    }

    render(){
        
        const navigation = this.props
        let { 
            isVisible,
            spendName,
            spendValue,
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
                onChangeText={(spendName) => { this.setState ({ spendName })}}
                value={spendName}
                >
                </TextInput>
                
                <TextInput
                style={{ height: 70, borderColor: 'gray', borderWidth: 2}}
                onChangeText={(spendValue) => { this.setState ({ spendValue })}}
                value={spendValue}
                ></TextInput>

                <TouchableOpacity onPress={() => {this.saveData()}}>
                    <Text>Adicionar</Text>
                </TouchableOpacity>
                    
                </Modal>
        );
    }
}

export default SpendModal;