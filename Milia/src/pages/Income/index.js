import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { Icon } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp}
from 'react-native-responsive-screen';

import styles from './styles';

import Header from '../../Components/Header';
import IncomeItem from './incomeItem/index';
import IncomeModal from './IncomeModal';
import { ScrollView } from 'react-native-gesture-handler';
import SpendWidget from '../../SpendWidget/index';


let db = openDatabase('inc_list','1.0','Income List', -1)

class Income extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            value: '',
            incomeTotal: 0,
            incomeArray: [],
            showModal: false,
        }
    }

    componentDidMount(){
        db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS income_table(income_id INTEGER PRIMARY KEY AUTOINCREMENT,income_name TEXT, income_value TEXT)')
        })
        //this.cleanAllData()
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
            
            let total = 0;

            for(i=0;i<len;i++){

                name = rows.item(i).income_name;
                value = rows.item(i).income_value;
                total = total + Number(value);
                //console.log(total)

                this.state.incomeArray.push({

                    'name': name + ';.;' + String(value)
                    
                });


                this.setState({incomeArray: this.state.incomeArray, incomeTotal: total})
                
                
            }

            //console.log(this.state.incomeArray)
    
        });
    }

    cleanAllData(){

        db.transaction(function(tx){
            tx.executeSql('DELETE FROM income_table', [], (tx, resultado) =>{
                
                //console.log('Item deleted')

            })
        })

        this.showData()

    }

    openModal = () => {
        this.setState({ showModal: true });
    }

    closeModal = () => {
        //console.log("PASSOU AQUI");
        this.setState({ showModal: false },  () => {
            this.showData();
        }
        );
    }

    deleteData(itemID){

        id = this.getID(itemID)

        db.transaction(function(tx){
            tx.executeSql('DELETE FROM income_table WHERE income_id =' + id, [], (tx, resultado) =>{
                
                console.log('Item deleted')

            })
        })

        this.showData()

    }

    getID(i){

        let result = new Promise((resolve,reject) => {
            
            db.transaction(function(tx){
            tx.executeSql('SELECT * FROM income_table',[],(tx,resultado) => {
                resolve(resultado)
                
                
            })
        },null)})

        result.then((resultado) => {

           id = resultado.rows.item(i).income_id
           return id

        })


    }
    
    
    render(){

        const navigation = this.props;
        const {
            incomeArray,
            showModal,
            incomeTotal
        } = this.state
        let incomes = incomeArray.map((val, key) =>{
            return <IncomeItem key={key} val={val}
                    deleteMethod={ ()=> this.deleteData(key) }
                    navigation = {navigation} />
        })
        return (
            <>  
                <Header color={'#fd8888'} title={'Month Revenue'}/>
                <ImageBackground
                            
                    source={require('./backMIliaWithGrey.png')}
                    style={styles.background}
                    resizeMode = 'cover'
                            
                />
                <View style={styles.page_container}>
                    <View style={{ height: hp('70%') }}>
                    <ScrollView>
                        {incomes}
                        <TouchableOpacity onPress={this.openModal}>
                        <View style={styles.add_container}>
                            <View  style={styles.add_icon}>
                                <Icon
                                name='plus'
                                type='antdesign'
                                color='red'
                                size={35}
                                //iconStyle={styles.add_icon}
                                />
                            </View>
                        </View>
                        </TouchableOpacity>
                    </ScrollView>
                    </View>
                    {/* <View style={styles.total_container}>
                    <Icon
                      name='ios-cash'
                      type='ionicon'
                      color='green'
                      size={30}
                      //iconStyle={styles.add_icon}
                    />
                    <Text style={styles.total_text}>Total</Text>
                    <Text style={styles.total_value}>{'R$ ' + String(incomeTotal)}</Text>
                    </View> */}
                    <SpendWidget />
                </View>
                
                {showModal && (
                    <IncomeModal
                    navigation={navigation}
                    closeModal={this.closeModal}
                    />
                )}
               
            </>
        );
    }
}

export default Income;