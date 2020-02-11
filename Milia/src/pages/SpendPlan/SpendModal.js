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
                transparent={true} 
                animationType="slide"
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
                    style={{ color:'white', height: 50, borderColor: 'rgb(8, 140, 196)', borderBottomWidth: 2, textAlignVertical:'bottom' }}
                    onChangeText={(spendName) => { this.setState ({ spendName })}}
                    value={spendName}
                    placeholder={'Name'}
                    placeholderTextColor={'rgba(255,255,255,0.7)'}
                    >
                    </TextInput>
                    
                    <TextInput
                    style={{ color:'white', height: 50, borderColor: 'rgb(8, 140, 196)', borderBottomWidth: 2, textAlignVertical:'bottom' }}
                    onChangeText={(spendValue) => { this.setState ({ spendValue })}}
                    value={spendValue}
                    keyboardType={'numeric'}
                    placeholder={'Plan Value'}
                    placeholderTextColor={'rgba(255,255,255,0.7)'}

                    ></TextInput>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => {this.closeModal()}}>
                            <View style={{borderWidth: 2, borderColor: 'gray', borderRadius: 5, padding: 7, marginLeft: 63.5, marginTop: 30, width: 100, alignItems: 'center'}}>
                                <Text style={{color: 'gray', fontFamily: 'Manjari-Thin', marginTop: 3}}>Cancelar</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {this.saveData()}}>
                            <View style={{  marginLeft: 20, marginTop: 30, borderWidth: 2, borderRadius: 5, borderColor: 'rgb(8, 140, 196)', padding: 7, width: 100, alignItems: 'center' }}>
                                <Text style={{color: 'rgb(8, 140, 196)', fontFamily: 'Manjari-Thin', marginTop: 3}}>Adicionar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
                </Modal>
        );
    }
}

export default SpendModal;