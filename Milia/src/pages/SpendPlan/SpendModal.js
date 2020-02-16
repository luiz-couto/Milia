import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';
import { View, Text, TouchableOpacity } from 'react-native';
import { Portal, Dialog, TextInput } from 'react-native-paper';
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

        return (
            <Portal>
                <Dialog
                style={{ backgroundColor: 'white' }}
                visible={isVisible}
                onDismiss={() => {
                    this.closeModal();
                }}>
                <Dialog.Title style={{ color: '#088cc4', fontFamily: 'Manjari-Bold' }}> Add Spend Plan </Dialog.Title>
                <Dialog.Content>
                <TextInput
                    label='Name'
                    value={spendName}
                    onChangeText={spendName => this.setState({ spendName })}
                    mode={'outlined'}
                    style={{ height: 55, marginTop: 15 }}
                />
                <TextInput
                    label='Value'
                    value={spendValue}
                    onChangeText={spendValue => this.setState({ spendValue })}
                    keyboardType={'numeric'}
                    mode={'outlined'}
                    style={{ height: 55, marginTop: 15 }}
                />
                </Dialog.Content>
                <Dialog.Actions>
                    <TouchableOpacity onPress={() => {this.saveData()}}>
                        <View style={{ width: wp('81%'), backgroundColor: '#088cc4' }}>    
                            <Text style={{fontFamily: 'Manjari-Bold', fontSize: 25, color:'white', marginTop: 10, textAlign: 'center' }}>O K</Text>
                        </View>
                    </TouchableOpacity>
                </Dialog.Actions>
                </Dialog>
            </Portal>
        );
    }
}

export default SpendModal;