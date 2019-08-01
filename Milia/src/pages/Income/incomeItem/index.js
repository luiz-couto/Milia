import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image,Alert} from 'react-native';

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

    render(){
        const navigation = this.props.navigation
        return(
            <View>
                <Text>{this.returnName()}</Text>
                <Text>{this.returnValue()}</Text>
            </View>
        );
    }

}