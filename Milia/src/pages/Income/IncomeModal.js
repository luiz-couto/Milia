import React from 'react';
import { Modal, View, Text, TouchableOpacity, ImageBackground, Image, TextInput } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import styles from './styles';

let db = openDatabase('inc_list','1.0','Income List', -1)

class IncomeModal extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            isVisible: true,
            incomeName: '',
            incomeValue: '',
        }
    }

    closeModal() {
        //console.log('passou aqui');
        this.setState({ isVisible: false }, () => {
            setTimeout(this.props.closeModal, 500);
        });
    }
    
    saveData() {
        let {
            incomeName,
            incomeValue
        } = this.state
        
        //console.log(incomeName);
        //console.log(incomeValue);

        db.transaction(function(tx){
            tx.executeSql('INSERT INTO income_table (income_name,income_value) VALUES(?,?)',[incomeName,incomeValue])
        })

        this.closeModal();
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
                keyboardType={'numeric'}
                ></TextInput>

                <TouchableOpacity onPress={() => {this.saveData()}}>
                    <Text>Adicionar</Text>
                </TouchableOpacity>
                    
                </Modal>
        );
    }
}

export default IncomeModal;