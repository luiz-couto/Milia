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
                <View style={styles.triangle_mark}>
                </View>
                
                <View style={{  paddingLeft: 4, padding: 9, }}>
                <View style={{}}>
                    <Text style={styles.spend_name}> {this.returnName()} </Text>
                </View>
                <View style={styles.spend_info_container}>
                    <Text style={styles.spend_info_text}>{this.returnValue()}</Text>
                    <Text style={styles.spend_info_text}>{ ' - ' + this.returnSpendAlready() }</Text>
                    <Text style={styles.spend_info_text}>{ ' = ' + sub }</Text>
                </View>
                </View>
            </View>
            </TouchableOpacity>
        );
    }

}

export default SpendItem;