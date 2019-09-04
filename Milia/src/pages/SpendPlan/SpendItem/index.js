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
        spl = value.split(';.;',3)
        return spl[1];
    }

    returnSpendAlready() {
        value = this.props.val.name;
        spl = value.split(';.;',3)
        return spl[2];
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
        let sub = String(Number(this.returnValue()) - Number(this.returnSpendAlready()))
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