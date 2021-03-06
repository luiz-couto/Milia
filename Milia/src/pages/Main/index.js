import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image, Modal } from 'react-native';
import SpendWidget from '../../SpendWidget/index';

import ISpend from '../ISpend/index';

import styles from './styles';

class Main extends React.Component {

    render(){
        const navigation = this.props.navigation;
        return(
            <View>
                <ImageBackground
                    
                    source={require('./main_background.png')}
                    style={styles.background}
                    resizeMode = 'cover'
                    
                />
                <Image
                    source={require('./milia_logo.png')}
                    style={styles.logo}
                />
                <TouchableOpacity onPress={() => {navigation.navigate('Income')}} style={styles.start_button}>
                    <Text style={styles.button_text}>Começar</Text>
                </TouchableOpacity>
                <SpendWidget />

            </View>
        );
        
    }
}

export default Main;