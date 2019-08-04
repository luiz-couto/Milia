import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

import { ScrollView } from 'react-native-gesture-handler';
import SpendModal from './SpendModal';
import SpendItem from './SpendItem/index';

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

        const navigation = this.props;
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
                    <TouchableOpacity onPress={this.openModal}>
                        <Text>Adicionar</Text>
                    </TouchableOpacity>
                    <ScrollView>
                        {spends}
                    </ScrollView>
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