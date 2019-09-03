import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

import { ScrollView } from 'react-native-gesture-handler';
import SpendModal from './SpendModal';
import SpendItem from './SpendItem/index';

import { Icon } from 'react-native-elements'

import styles from './styles';

let db = openDatabase('inc_list','1.0','Income List', -1)

class SpendPlan extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            value: '',
            spendAlready:'',
            incomeTotal: 0,
            spendArray: [],
            showModal: false,
        }
    }

    componentDidMount(){
        db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS spend_table(spend_id INTEGER PRIMARY KEY AUTOINCREMENT,spend_name TEXT, spend_value TEXT, spend_already TEXT)')
        })
        //this.cleanAllData()
        this.showData()    
    }

    showData(){
        let result = new Promise((resolve,reject) => {
            
            db.transaction(function(tx){
            tx.executeSql('SELECT * FROM spend_table',[],(tx,resultado) => {
                resolve(resultado)
                
                
            })
        },null)})

        result.then((resultado) => {
            
            rows = resultado.rows
            len = resultado.rows.length
            
            this.state.spendArray = []

            if(len==0){
                this.setState({spendArray: this.state.spendArray})
            }
            
            let total = 0;

            for(i=0;i<len;i++){

                name = rows.item(i).spend_name;
                value = rows.item(i).spend_value;
                spendAlready = rows.item(i).spend_already;

                total = total + Number(value);
                console.log(total)

                this.state.spendArray.push({

                    'name': name + ';.;' + String(value) + ';.;' + String(spendAlready)
                    
                });


                this.setState({spendArray: this.state.spendArray, incomeTotal: total})
                
                
            }

            console.log(this.state.spendArray)
    
        });
    }

    cleanAllData(){

        db.transaction(function(tx){
            tx.executeSql('DELETE FROM spend_table', [], (tx, resultado) =>{
                
                console.log('Item deleted')

            })
        })

        this.showData()

    }

    openModal = () => {
        this.setState({ showModal: true });
    }

    closeModal = () => {
        console.log("PASSOU AQUI");
        this.setState({ showModal: false },  () => {
            this.showData();
        }
        );
    }
    
    
    render(){
        
        const {navigation} = this.props;

        if(navigation.getParam('atualizar',0) == 1){
            
            navigation.state.params.atualizar = 0;
            this.showData();
        }

        const {
            spendArray,
            showModal,
            incomeTotal
        } = this.state
        let spends = spendArray.map((val, key) =>{
            return <SpendItem key={key} val={val}
                    navigation = {navigation} />
        })
        return (
            <>
                <View>
                    <ImageBackground
                            
                            source={require('./background-coin.png')}
                            style={styles.background}
                            resizeMode = 'cover'
                            
                    />
                    <View style={styles.header}>
                    
                    </View>
                    <View style={{height: hp('70%')}}>
                    <ScrollView style={{}}>
                        {spends}
                        <TouchableOpacity onPress={this.openModal}>
                        <View style={styles.add_container}>
                            <View  style={styles.add_icon}>
                                <Icon
                                name='plus'
                                type='antdesign'
                                color='rgb(8, 140, 196)'
                                size={35}
                                //iconStyle={styles.add_icon}
                                />
                            </View>
                        </View>
                        </TouchableOpacity>
                    </ScrollView>
                    </View>
                </View>
                {showModal && (
                    <SpendModal
                    navigation={navigation}
                    closeModal={this.closeModal}
                    />
                )}
            </>
        );
    }
}

export default SpendPlan;