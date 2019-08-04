import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

import { ScrollView } from 'react-native-gesture-handler';

let db = openDatabase('inc_list','1.0','Income List', -1)

class ISpend extends React.Component {
    render() {
        return (
            <Text> Helloo Milia </Text>
        );
    }
}

export default ISpend;