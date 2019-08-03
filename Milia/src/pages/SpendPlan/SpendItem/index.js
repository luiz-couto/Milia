import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image,Alert} from 'react-native';

import styles from './styles';

class SpendItem extends React.Component {

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

    returnSpendAlready() {
        value = this.props.val.name;
        spl = value.split(';.;',3)
        return spl[2];
    }

    render(){
        const navigation = this.props.navigation
        return(
            <View>
                <Text>{this.returnName() + ' - ' + 'R$ ' + this.returnValue() + ' - ' + this.returnSpendAlready()}</Text>
            </View>
        );
    }

}

export default SpendItem;