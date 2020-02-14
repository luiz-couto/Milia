import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image,Alert} from 'react-native';
import { Icon } from 'react-native-elements'

import styles from './styles';

class IncomeItem extends React.Component {

    returnName(){
        name = this.props.val.name;
        spl = name.split(';.;',2);
        return spl[0];
    }

    returnValue(){
        value = this.props.val.name;
        spl = value.split(';.;',2);
        num = (Number(spl[1])).toFixed(2);
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
        const navigation = this.props.navigation
        return(
            <TouchableOpacity onLongPress={() => this.deleteComment()}>
                <View style={styles.item_container}>
                <View style={styles.triangle_mark}>

                </View>
                <View style={{paddingLeft: 0,padding: 9, flexDirection: 'row' }}>
                    <Text style={styles.income_name}> {this.returnName()} </Text>
                    <Text style={styles.income_value}>{ 'R$ ' + this.returnValue()}</Text>
                </View>
                </View>
            </TouchableOpacity>
        );
    }

}

export default IncomeItem;