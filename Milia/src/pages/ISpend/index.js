import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, Picker, TextInput } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

import { ScrollView } from 'react-native-gesture-handler';

let db = openDatabase('inc_list','1.0','Income List', -1)

class ISpend extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            selectedSpend: '',
            spendList: [],
            spendNow: null,
        }
    }

    componentDidMount() {
        this.setSpendNames();
    }

    setSpendNames() {

        let spendNames = [];
        let result = new Promise((resolve,reject) => {
            
            db.transaction(function(tx){
            tx.executeSql('SELECT * FROM spend_table',[],(tx,resultado) => {
                resolve(resultado)
                
                
            })
        },null)})

        result.then((resultado) => {
            
            rows = resultado.rows
            len = resultado.rows.length

            for(i=0;i<len;i++){

                name = rows.item(i).spend_name;
                spendNames.push(name);
                
            }
            this.setState({ spendList: spendNames })
        });
    }

    updateData(){

        let {
            spendNow,
            selectedSpend
        } = this.state


        let result = new Promise((resolve,reject) => {
            
            db.transaction(function(tx){
            tx.executeSql('SELECT spend_already FROM spend_table WHERE spend_name=(?)',[selectedSpend],(tx,resultado) => {
                resolve(resultado)
            })
        },null)})

        result.then((resultado) => {
            let base = resultado.rows.item(0).spend_already
            sum = Number(base) + Number(spendNow)
            db.transaction(function(tx){
                tx.executeSql('UPDATE spend_table SET spend_already =(?) WHERE spend_name =(?)',[String(sum), selectedSpend])
            })
    
        });


    }


    
    render() {
        const {
            selectedSpend,
            spendList,
            spendNow
        } = this.state

        return (
            <View>
                <Picker
                mode='dropdown'
                selectedValue={selectedSpend}
                style={{height: 30, width: 300}}
                onValueChange={(itemValue, itemIndex) => {
                    this.setState({ selectedSpend: itemValue });
                }}
                >
                {spendList.map(( spend ) => {
                    return(
                    <Picker.Item key={`spend-${spend}`} label={spend} value={spend}/>
                    );
                })}
                </Picker>
                
                <TextInput
                style={{ height: 70, borderColor: 'gray', borderWidth: 2}}
                onChangeText={(spendNow) => { this.setState ({ spendNow })}}
                value={spendNow}
                >
                </TextInput>
                <TouchableOpacity onPress={() => {this.updateData()}}>
                    <Text>Spend!</Text>
                </TouchableOpacity>
            </View>
            
        );
    }
}

export default ISpend;