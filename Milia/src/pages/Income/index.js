import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

import styles from './styles';


let db = openDatabase('inc_list','1.0','Income List', -1)

class Income extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            value: '',
            incomeArray: [],
        }
    }

    componentDidMount(){
        db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS income_table(income_id INTEGER PRIMARY KEY AUTOINCREMENT,income_name TEXT, income_value NUMBER)')
        })
        this.showData()    
    }

    showData(){
        let result = new Promise((resolve,reject) => {
            
            db.transaction(function(tx){
            tx.executeSql('SELECT * FROM income_table',[],(tx,resultado) => {
                resolve(resultado)
                
                
            })
        },null)})

        result.then((resultado) => {
            
            rows = resultado.rows
            len = resultado.rows.length
            
            this.state.incomeArray = []

            if(len==0){
                this.setState({incomeArray: this.state.incomeArray})
            }
            
            for(i=0;i<len;i++){

                name = rows.item(i).income_name
                value = rows.item(i).income_value

                this.state.incomeArray.push({

                    'name': name + ';.;' + value
                    
                });


                this.setState({incomeArray: this.state.incomeArray})
                
                
            }

            console.log(this.state.incomeArray)
    
        });
    }
    
    
    
    
    render(){
        return (
            <Text>Income Page</Text>
        );
    }
}

export default Income;