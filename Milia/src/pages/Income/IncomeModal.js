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
                transparent={true} 
                animationType="fade"
                visible={isVisible}
                onRequestClose={ () => {this.closeModal()}}
                > 
                <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'}}>
                    <View style={{
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            width: 330,
                            height: 220,
                            padding: 20,
                            borderWidth: 1,
                            borderColor: 'white',
                            borderRadius: 12,
                            }}>
                        <TextInput
                        style={{ color:'white', height: 50, borderColor: 'rgba(252,95,95,0.8)', borderBottomWidth: 2, textAlignVertical:'bottom'}}
                        onChangeText={(incomeName) => { this.setState ({ incomeName })}}
                        value={incomeName}
                        placeholder={'Put here the name of the new income'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        >
                        </TextInput>
                        
                        <TextInput
                        style={{ color:'white', height: 50, borderColor: 'rgba(252,95,95,0.8)', borderBottomWidth: 2, textAlignVertical:'bottom'}}
                        onChangeText={(incomeValue) => { this.setState ({ incomeValue })}}
                        value={incomeValue}
                        keyboardType={'numeric'}
                        placeholder={'...and his value here'}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        ></TextInput>
                        <View style={{flexDirection:'row'}}>
                            <TouchableOpacity onPress={() => {this.closeModal()}}>
                                <View style={{borderWidth: 2, borderColor: 'gray', borderRadius: 5, padding: 7, marginLeft: 63.5, marginTop: 30, width: 100, alignItems: 'center'}}>
                                <Text style={{color: 'gray', fontFamily: 'Manjari-Thin', marginTop: 3}}>Cancelar</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {this.saveData()}}>
                                <View style={{  marginLeft: 20, marginTop: 30, borderWidth: 2, borderRadius: 5, borderColor: 'rgba(252,95,95,0.8)', padding: 7, width: 100, alignItems: 'center' }}>
                                <Text style={{color: 'rgba(252,95,95,0.8)', fontFamily: 'Manjari-Thin', marginTop: 3}}>Adicionar</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </Modal>
        );
    }
}

export default IncomeModal;