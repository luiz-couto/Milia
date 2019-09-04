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
        spl = value.split(';.;',2)
        return spl[1];
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
                    <Icon
                        name='coin'
                        type='material-community'
                        color='#FFD700'
                        size={26}
                        //iconStyle={styles.add_icon}
                    />
                    {/* <Text>{this.returnName() + ' - ' + 'R$ ' + this.returnValue()}</Text> */}
                    <Text style={styles.income_name}> {this.returnName()} </Text>
                    <Text style={styles.income_value}>{ 'R$ ' + this.returnValue()}</Text>
                </View>
            </TouchableOpacity>
        );
    }

}

export default IncomeItem;