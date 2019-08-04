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
            totalIncome: null,
            totalValue: null,
        }
    }

    componentDidMount() {
        
        this.setIncomeTotal();
        this.setTotalValueAlready();
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
            spendValue,
            totalValue
        } = this.state
        
        canSave = this.verifyBalance(Number(spendValue))
        if (canSave == true) {

            let spend_already = '0'

            db.transaction(function(tx){
                tx.executeSql('INSERT INTO spend_table (spend_name,spend_value,spend_already) VALUES(?,?,?)',[spendName,spendValue,spend_already]);
            })

            this.setState( { totalValue: totalValue + Number(spendValue) }, () => { this.closeModal() })
        } else {
            return ;
        }
    }

    setIncomeTotal() {

        let total = 0;

        let result = new Promise((resolve,reject) => {
            
            db.transaction(function(tx){
            tx.executeSql('SELECT * FROM income_table',[],(tx,resultado) => {
                resolve(resultado)
                
                
            })
        },null)})

        result.then((resultado) => {
            
            rows = resultado.rows
            len = resultado.rows.length
            
            total = 0;

            for(i=0;i<len;i++){

                value = rows.item(i).income_value;
                total = total + Number(value);
                
            }

            this.setState({ totalIncome: total })
    
        });

    }

    setTotalValueAlready() {

        let total = 0;

        let result = new Promise((resolve,reject) => {
            
            db.transaction(function(tx){
            tx.executeSql('SELECT * FROM spend_table',[],(tx,resultado) => {
                resolve(resultado)
                
                
            })
        },null)})

        result.then((resultado) => {
            
            rows = resultado.rows
            len = resultado.rows.length
            
            total = 0;

            for(i=0;i<len;i++){

                value = rows.item(i).spend_value;
                total = total + Number(value);
                      
            }
             
            this.setState( { totalValue: total })

        });

    }

    verifyBalance(spendValue){
        let {
            totalIncome,
            totalValue,
        } = this.state

        console.log(totalIncome,totalValue,spendValue);
        if (totalIncome - totalValue - Number(spendValue) >= 0 ) {
            return true;
        } else {
            return false;
        }
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
                keyboardType={'numeric'}
                ></TextInput>

                <TouchableOpacity onPress={() => {this.saveData()}}>
                    <Text>Adicionar</Text>
                </TouchableOpacity>
                    
                </Modal>
        );
    }
}

export default SpendModal;