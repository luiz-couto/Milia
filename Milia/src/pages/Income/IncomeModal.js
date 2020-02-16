import React from 'react';
import { Modal, View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';
import { Portal, Dialog, TextInput } from 'react-native-paper';
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

        return (
            <Portal>
                <Dialog
                style={{ backgroundColor: 'white' }}
                visible={isVisible}
                onDismiss={() => {
                    this.closeModal();
                }}>
                <Dialog.Title style={{ color: '#fd8888', fontFamily: 'Manjari-Bold' }}> Add Income </Dialog.Title>
                <Dialog.Content>
                <TextInput
                    label='Name'
                    value={incomeName}
                    onChangeText={incomeName => this.setState({ incomeName })}
                    mode={'outlined'}
                    style={{ height: 55, marginTop: 15 }}
                />
                <TextInput
                    label='Value'
                    value={incomeValue}
                    onChangeText={incomeValue => this.setState({ incomeValue })}
                    keyboardType={'numeric'}
                    mode={'outlined'}
                    style={{ height: 55, marginTop: 15 }}
                />
                </Dialog.Content>
                <Dialog.Actions>
                    <TouchableOpacity onPress={() => {this.saveData()}}>
                        <View style={{ width: wp('81%'), backgroundColor: '#fd8888' }}>    
                            <Text style={{fontFamily: 'Manjari-Bold', fontSize: 25, color:'white', marginTop: 10, textAlign: 'center' }}>O K</Text>
                        </View>
                    </TouchableOpacity>
                </Dialog.Actions>
                </Dialog>
            </Portal>
        );

    }
}

export default IncomeModal;