import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image,Alert} from 'react-native';
import { Icon } from 'react-native-elements'

import styles from './styles';

class SpendItem extends React.Component {

    returnName(){
        name = this.props.val.name;
        spl = name.split(';.;',3);
        return spl[0];
    }

    returnValue(){
        value = this.props.val.name;
        spl = value.split(';.;',3);
        num = (Number(spl[1])).toFixed(2);
        return num;
    }

    returnSpendAlready() {
        value = this.props.val.name;
        spl = value.split(';.;',3);
        num = (Number(spl[2])).toFixed(2);
        return num;
    }

    deleteComment(){
        Alert.alert(
            'Opções',
            '',
            [
              {
                text: 'Editar',
                onPress: () => console.log('Edit Pressed'),
                style: 'cancel',
              },
              {text: 'Apagar', onPress: this.props.deleteMethod},
            ],
            {cancelable: true}
          );
    }

    render(){
        const navigation = this.props.navigation;
        let sub = Number(Number(this.returnValue()) - Number(this.returnSpendAlready())).toFixed(2);
        return(
            <TouchableOpacity onLongPress={() => this.deleteComment()}>
            <View style={styles.item_container}>
                
                <View style={styles.item_header}>
                    <Icon
                        name='coin'
                        type='material-community'
                        color='#FFD700'
                        size={26}
                        //iconStyle={styles.add_icon}
                    />
                    <Text style={styles.income_name}> {this.returnName()} </Text>
                </View>
                <View style={styles.item_content}>
                    <Text style={styles.income_value}>{ 'R$ ' + this.returnValue()}</Text>
                    <Text style={styles.income_spend}>{ ' - ' + this.returnSpendAlready() }</Text>
                    <Text style={styles.income_sub}>{ ' = ' + sub }</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }

}

export default SpendItem;